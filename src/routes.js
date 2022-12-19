import Index from './Pages/Index/Index'
import CourseInfo from './Pages/CourseInfo/CourseInfo'
import Category from './Pages/Category/Category'
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo'
import  Courses  from './Pages/Courses/Courses'
import  Login  from './Components/Login/Login'
import  Register  from './Components/Register/Register'


const routes = [
{path:'/' , element : <Index />},
{path:'/course-info/:courseName' , element : <CourseInfo />},
{path:'/category-info/:categoryName' , element : <Category />},
{path:'/article-Info/:articleName' , element : <ArticleInfo />},
{path:'/courses' , element : <Courses />},
{path:'/login' , element : <Login />},
{path:'/register' , element : <Register />}
]

export default routes