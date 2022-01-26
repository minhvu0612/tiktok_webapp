export const setLocal = (data) => {
     Object.keys(data.data).forEach(key => {
         if (data.data[key] == null){
            localStorage.setItem(key, "");
         }
         else{
            localStorage.setItem(key, data.data[key]);
         }
     })
}

export const removeLocal = () => {
    localStorage.clear();
}