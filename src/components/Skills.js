import React from "react";

function Skills() {
  const skill = [
    {
      name: "HTML",
      url: "https://akshaykadu24.github.io/static/media/html.6e930594286d8afe4c79.png",
    },
    {
      name: "CSS",
      url: "https://akshaykadu24.github.io/static/media/css.1a57e67ac1fd2ea84d64.png",
    },
    {
      name: "Boostrap",
      url: "https://akshaykadu24.github.io/static/media/boostrap.c5dedb5348b058d36661.png",
    },
    {
      name: "Javascript",
      url: "https://banner2.cleanpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg",
    },
    {
      name: "React Js",
      url: "https://akshaykadu24.github.io/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg",
    },
    {
      name: "Redux",
      url: "https://akshaykadu24.github.io/static/media/redux.1b4bb5fceb01b19da59d.png",
    },
    {
      name: "Node js",
      url: "https://akshaykadu24.github.io/static/media/nodejs.8e341cc00e4ec40c6a27.png",
    },
    {
      name: "Express Js",
      url: "https://akshaykadu24.github.io/static/media/expressjs.b1ea2a56a1684a950424.webp",
    },
    {
      name: "Next Js",
      url: "https://akshaykadu24.github.io/static/media/nextjs.6db19b31cc0a2f63cff4.png",
    },
    {
      name: "MongoDb",
      url: "https://akshaykadu24.github.io/static/media/mongodb.7a16fc61d457c9e340e2.png",
    },
    {
      name: "Tailwind Css",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 w-[80%] h-fit pb-40 m-auto">
        <div>
          <h1 className=" py-4 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-4  gap-4 lg:grid-cols-6 bg-gray-900 sm:grid-cols-2 h-full lg:gap-8">
          {skill.map((item, index) => (
            <div
              key={index}
              className=" h-[11rem] rounded-3xl shadow-lg bg-[#213469] items-center px-8 py-4 m-auto"
            >
              <div className="h-24 w-24  ">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="text-center p-2">
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
