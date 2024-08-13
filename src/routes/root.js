// export default function Root() {
//   return (
//     <>
//       <div id="sidebar">
//         <h1>React Router Contacts</h1>
//         <div>
//           <form id="search-form" role="search">
//             <input
//               id="q"
//               aria-label="Search contacts"
//               placeholder="Search"
//               type="search"
//               name="q"
//             />
//             <div
//               id="search-spinner"
//               aria-hidden
//               hidden={true}
//             />
//             <div
//               className="sr-only"
//               aria-live="polite"
//             ></div>
//           </form>
//           <form method="post">
//             <button type="submit">New</button>
//           </form>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href={`/contacts/1`}>Your Name</a>
//             </li>
//             <li>
//               <a href={`/contacts/2`}>Your Friend</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div id="detail"></div>
//     </>
//   );
// }

export default function Root() {
  return (
    <>
      <div>
        <h1>KGQL: GraphQL Radio</h1>
        <p><a href={`/foo`}>Foo Page</a></p>
        <p><a href={`/bar`}>Bar Page</a></p>
      </div>
    </>
  );
}