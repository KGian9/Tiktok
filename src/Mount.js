import React from "react";
import { useEffect, useState } from "react";

//*Có 3 trường hợp đc vận dụng
//*useEffect(callback)*/
//* - gọi callback mỗi khi component re-render (ít dùng)
//* - gọi callback sau khi component thêm element vào DOM
//*useEffect(callback, [])*/
//* - chỉ gọi callback 1 sau khi component mouted
//*useEffect(callback, [deps])*/
//* - callback sẽ được gọi lại mỗi khi deps thay đổi
//* callback luôn đc gọi sau khi component mounted
//* Cleanup function luôn được gọi sau khi component mount
//* Cleanup function luôn được gọi trước khi component unmounted
//* Cleanup function luôn được gọi trước khi component unmounted
//* Cleanup function luôn được gọi trước khi callback đc gọi, trừ lần đầu tiên

//  function Mount() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);
//   const [width, setWidth] = useState(window.innerWidth);

//   const tabs = ["posts", "comments", "albums"];

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       // if(window.scrollY >= 200){
//       //   setShowGoToTop(true)
//       // } else {
//       //   setShowGoToTop(false)
//       // }

//       setShowGoToTop(window.scrollY >= 200);
//     };

//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const goToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setType(tab)}
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   backgroundColor: "#333",
//                 }
//               : {}
//           }
//         >
//           {tab}
//         </button>
//       ))}

//       <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>

//       {showGoToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom: 20,
//           }}
//           onClick={goToTop}
//         >
//           Go to top
//         </button>
//       )}

//       <h1>{width}</h1>
//     </div>
//   );
// }

//* useEffect with timer functions

// function Mount() {
//   const [countDown, setCountDown] = useState(180);

//   //* cách làm sai -> https://youtu.be/zGNOhVjrWFw?t=141
//   // setInterval(() => {
//   //   setCountDown(countDown - 1);
//   // }, 1000);

//   //* cách làm đúng -> https://youtu.be/zGNOhVjrWFw?t=194
//   useEffect(() => {
//     const timerID = setInterval(() => {
//       setCountDown((prevState) => prevState - 1);
//     }, 1000);

//     return () => clearInterval(timerID);
//   }, []);

//   return <div>{countDown}</div>;
// }

//* useEffect with preview avatar and fake chat app
//* fake chat app
const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? và tại sao nên học ReactJS?",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function?",
  },
];

function Mount({ onIncrease }) {
  //* preview avatar
  // const [avatar, setAvatar] = useState();

  // useEffect(() => {
  //   // cleanup
  //   return () => {
  //     avatar && URL.revokeObjectURL(avatar.preview);
  //   };
  // }, [avatar]);

  // const handlePreviewAvatar = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file);

  //   setAvatar(file);
  // };

  //* fake chat app

  // const [lessonsId, setLessonId] = useState(2);

  // useEffect(() => {
  //   const handleComment = ({ detail }) => {
  //     console.log(detail);
  //   };

  //   window.addEventListener(`lesson-${lessonsId}`, handleComment);

  //   return () => {
  //     window.removeEventListener(`lesson-${lessonsId}`, handleComment);
  //   };
  // }, [lessonsId]);

  // return (
  //   <div>
  //     {/* //* preview avatar */}
  //     {/* <input type="file" onChange={handlePreviewAvatar} />
  //     {avatar && <img src={avatar.preview} alt="" width="80%" />} */}
  //     {/* //* fake chat app */}
  //     <ul>
  //       {lessons.map((lesson) => (
  //         <li
  //           key={lesson.id}
  //           style={{
  //             color: lessonsId === lesson.id ? "red" : "#333",
  //           }}
  //           onClick={() => setLessonId(lesson.id)}
  //         >
  //           {lesson.name}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  //* useLayoutEffect Hook
  //* 1. cập nhật lại State
  //* 2. cập nhật lại DOM (mutated)
  //* 3. gọi cleanup nếu deps thay đổi
  //* 4. gọi useLayoutEffect callback
  //* 5. render lại UI

  return (
    <>
      <div>
        <button onClick={onIncrease}>Click me!</button>
      </div>
    </>
  );
}

export default Mount;
