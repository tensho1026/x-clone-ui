// "use client";
// import Image from "next/image";
// import { IKImage } from "imagekitio-next";
// const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;


// const Homepage = () => {
//   return (
//     <div className=''>
//       <IKImage
//         urlEndpoint={urlEndpoint}
//         path='general/post.jpeg'
//         width={600}
//         height={600}
//         alt='test post'
//       />
//     </div>
//   );
// };

// export default Homepage;
"use client";
import { IKImage } from "imagekitio-next";

const Homepage = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT || "";

  if (!urlEndpoint) {
    return <p>URL Endpoint is not defined</p>;
  }

  return (
    <div>
      <IKImage
        urlEndpoint={urlEndpoint}
        path="general/post.jpeg"
        width={600}
        height={600}
        alt="test post"
      />
    </div>
  );
};

export default Homepage;
