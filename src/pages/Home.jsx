import React from "react";
import { Link } from "react-router-dom";
import CardComponent from "../component/CardComponent";
import { motion } from 'framer-motion';

export default function Home() {
  const cardData = [
    {
      imageUrl: "https://images.freeimages.com/images/large-previews/f57/free-photos-1159976.jpg",
      title: "Who Are We?",
      description: "Our platform provides a seamless solution for students to convert PDF question papers of exams like JEE into interactive online mock exams. By uploading their papers, students can simulate exam conditions and practice effectively. Additionally, institutes can utilize our platform for online assessments, offering a convenient and efficient way to conduct exams.",
    },
    {
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.vs_umldvqyB3PHH6oSpfqgHaFj&pid=Api&P=0&h=180",
      title: "Test Your Capabilities",
      description: "Convert PDF question papers, such as JEE exams, into interactive online mock exams. Upload papers to simulate exam conditions and practice effectively. Additionally, utilize the platform for online assessments, streamlining exam processes and much more. So what are you waiting for? Register with us and start stepping stairs",
      author: { name: "Jane Smith", imageUrl: "https://via.placeholder.com/50" },
      date: "March 9, 2024",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-2 px-4 sm:px-6 lg:px-8">
  {cardData.map((data, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, delay: index * 0.2 }} 
    >
      <CardComponent {...data} />
    </motion.div>
  ))}
</div>
      <div className="flex flex-col justify-center items-center mt-2 px-4 sm:px-6 lg:px-8">
        <div className="text-center border p-8 rounded-lg bg-gray-100 shadow-lg mb-3 w-full max-w-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-800 font-bold">
            Want to create a test?
          </h1>
          <Link
            to="/upload-file"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Click here
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-600 mb-4 sm:mb-0">
              Don't have an account?
              <Link to="/sign-up" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1">
                Register
              </Link>
            </p>
            <p className="text-gray-600">
              Already have an account?
              <Link to="/sign-in" className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out ml-1">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}