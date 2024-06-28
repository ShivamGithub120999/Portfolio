import React from "react";

function Tools() {
  const skill = [
    {
      name: "VS Code",
      url: "https://akshaykadu24.github.io/static/media/vscode.e66400756ccbdbfc0b31.png",
    },
    {
      name: "Git",
      url: "https://banner2.cleanpng.com/20190130/bzb/kisspng-git-merge-branching-version-control-commit-improved-git-management-5c52287a5e9491.9117513715488881863874.jpg",
    },
    {
      name: "Netlify",
      url: "https://akshaykadu24.github.io/static/media/netlify.7b25ee4c2e48d2f75857bcaff16fbc44.svg",
    },
    {
      name: "Vercel",
      url: "https://akshaykadu24.github.io/static/media/vercel.e939159f8dcd5cad534a93caf63b0b3c.svg",
    },
    {
      name: "Postman",
      url: "https://media.licdn.com/dms/image/C560BAQFf8sH83foEVg/company-logo_200_200/0/1654794308958/postman_platform_logo?e=1720051200&v=beta&t=o2qWsqHaD29t6Ok02dOfgawf89wfUPhjhYHSiI-zQ4c",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 w-[80%] h-fit  pb-28 m-auto">
        <div>
          <h1 className=" py-4 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Tools
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-4 items-center justify-center text-center gap-4 lg:grid-cols-6 bg-gray-900 sm:grid-cols-2 h-full lg:gap-8">
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

export default Tools;
