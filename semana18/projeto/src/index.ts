import app from "./app"
import signup from './endpoints/signup'
import login from "./endpoints/login";
import myProfile from "./endpoints/myProfile";
import yourProfile from "./endpoints/yourProfile";
// import login from "./endpoints/login";

app.post('/signup', signup);
app.post('/login', login);
app.get('/user/profile', myProfile);
app.get('/user/:id', yourProfile);


