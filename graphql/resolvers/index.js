const User = require('../../models/user');
const Book = require('../../models/book');
const Borrower = require('../../models/borrower');
const bcrypt = require('bcryptjs');


module.exports = {
    books: async () =>
    {
        try
        {
            const books = await Book.find();
            return books.map(book =>
            {
                return { ...book._doc }
            })
        } catch (error)
        {
            console.log(error);
            throw error;
        }
    },
    addBook: async (args) =>
    {
        const { title, isbn, publishYear, price } = args.bookInput;

        const book = new Book({
            title,
            isbn,
            publishYear,
            price
        })

        try
        {
            await book.save();
            return { ...book._doc };
         } catch (error)
        {
            console.log(error);
            throw error;
        }
    },
    borrowBook: async (args) =>
    {
        const bookId = args.bookId;
        const borrower = new Borrower({
            name: '',
            mobileNo: '',
            nationalID: '',
            dateBorrowed: Date.now(),
            book: bookId
        })

        try
        {
            const book = await Book.findById(bookId).populate('borrower');
            if (!book)
            {
                throw new Error('Book not found');
            }
            if (book.borrowed)
            {
                throw new Error('Book is already borrowed');
            }
            let borrowedBook
            book.borrowed = true;
            book.borrower = borrower;
            borrowedBook = await book.save();
            borrower.push(borrowedBook);
            return { ...book._doc, ...borrower._doc };
         } catch (error)
        { 
            console.log(error);
            throw error;
        }

    },
    createUser: async (args) =>
    {

        const { email, password } = args.userInput;
         
        const fetchedUser = await User.findOne({ email });

        if (fetchedUser)
        {
            throw new Error('User already exists');
        } else
        {
            try
            {
                const hashedPassword = await bcrypt.hash(password, 12);
                const user = new User({
                    email,
                    password: hashedPassword
                });
                await user.save();
    
                return { ...user._doc };
            }
            catch (error)
            {
                throw error;
            }
        }
    },
    login: async ({ email, password } ) =>
    {
        const user = await User.findOne({ email });
        if (!user)  
        {
            throw new Error('User does not exist');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual)
        {
            throw new Error('Password is incorrect');
        }
        
        return {...user._doc, password: null};

    }
}