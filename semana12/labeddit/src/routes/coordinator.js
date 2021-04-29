export const goToFeedPage = (history) => {
    history.push("/");
};
  
export const goToFeedDetailsPage = (history, id) => {
    history.push("/detail/:id");
};
  
export const goToLoginPage = (history) => {
    history.push("/login");
};
  
export const goToSignUpPage = (history) => {
    history.push("/signup");
};
  
export const goToLastPage = (history) => {
    history.goBack();
};