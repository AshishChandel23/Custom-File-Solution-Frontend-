const TokenClient = {
    getUserToken: ()=>{
        if(typeof window == 'undefined') return null;
        return window.localStorage.getItem('user_token');
    },
    removeToken: ()=>{
        if(typeof window == 'undefined') return null;
        window.localStorage.removeItem('user_token');
        return true;
    },
    removeAll: () => {
        if (typeof window == 'undefined') {
          return null
         }
         return window.localStorage.clear();
      }
}

export default TokenClient;