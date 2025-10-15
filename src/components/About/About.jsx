import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/4503734/pexels-photo-4503734.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           This project is built using React and React Router to create a smooth single-page application. It allows users to navigate between different pages like Home, About, and Contact without reloading the website. The About page explains the purpose of the app and showcases how React Router makes navigation simple and efficient.
                        </p>
                        <p className="mt-4 text-gray-600">
                           This project demonstrates the use of React Router for building a single-page application with multiple sections. The About page provides information about how routing works in React and how it helps in creating a faster and more interactive user experience without refreshing the page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
