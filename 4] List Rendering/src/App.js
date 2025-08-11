import './App.css';
import Header from './Header';
import Slider from './Slider';
import Tap from './Tap';
import Article from './Article';

function App() {
  const posts = [
    {    
      id:1, 
      postTitle:"React Hooks Essentials.", 
      postAuthor: "Ahmed Ali", 
      uploadDate: "10-March-2024", 
      readTime: "read since 8 minutes", 
      children: `Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
        We will also cover how to create dedicated Hooks to easily reuse logic.`
    },

    {    
      id:2, 
      postTitle:"Comparison between Redux and Context API in case management", 
      postAuthor: "Laila Hassan", 
      uploadDate: "12-March-2024", 
      readTime: "read since 20 minutes", 
      children: `Discover the differences between Redux and Context API and when to choose each.
        We will also discuss cases of using process and tips to improve performance.`
    },

    {    
      id:3, 
      postTitle:"Improved Performance of React Apps: Tried Tips", 
      postAuthor: "Mohamed Khaled", 
      uploadDate: "15-March-2024", 
      readTime: "read since 15 minutes", 
      children: `Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
        We will also cover how to create dedicated Hooks to easily reuse logic.`
    },

    {    
      id:4, 
      postTitle:"React Hooks Essentials.", 
      postAuthor: "Ali Ahmed", 
      uploadDate: "10-November-2024", 
      readTime: "read since 5 minutes", 
      children: `Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
          We will also cover how to create dedicated Hooks to easily reuse logic.`
    },

    {    
      id:5, 
      postTitle:"Comparison between Redux and Context API in case management", 
      postAuthor: "Hassan Laia", 
      uploadDate: "1-December-2024", 
      readTime: "read since 30 minutes", 
      children: `Discover the differences between Redux and Context API and when to choose each.
        We will also discuss cases of using process and tips to improve performance.`
    },

    {    
      id:6, 
      postTitle:"Improved Performance of React Apps: Tried Tips", 
      postAuthor: "Khaled Ali", 
      uploadDate: "23-February-2024", 
      readTime: "read since 1 hour", 
      children: `Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
          We will also cover how to create dedicated Hooks to easily reuse logic.`
    },
    {    
      id:7, 
      postTitle:"Improved Performance of React Apps: Tried Tips", 
      postAuthor: "Khaled Ali", 
      uploadDate: "23-February-2024", 
      readTime: "read since 1 hour", 
      children: `Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
          We will also cover how to create dedicated Hooks to easily reuse logic.`
    },
    {    
      id:8, 
      postTitle:"Improved Performance of React Apps: Tried Tips", 
      postAuthor: "Khaled Ali", 
      uploadDate: "23-February-2024", 
      readTime: "read since 1 hour", 
      children: `Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
          We will also cover how to create dedicated Hooks to easily reuse logic.`
    }
  ];

  const postList = posts.map((post) => {
    return <Article key={post.id} title={post.postTitle} author={post.postAuthor} date={post.uploadDate} time={post.readTime}>{post.children}</Article>
  })

  return (
    <main className="App">
      <Header/>

      <Slider/>
      
      <Tap/>

      <section id={'containerPosts'}>
        {postList}
      </section>
    </main>
  );
}

export default App;
