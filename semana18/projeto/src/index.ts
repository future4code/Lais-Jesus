import app from "./app"
import signup from './endpoints/signup'
import login from "./endpoints/login";
import myProfile from "./endpoints/myProfile";
// import login from "./endpoints/login";

app.post('/signup', signup);
app.post('/login', login);
app.get('/user/profile', myProfile);


