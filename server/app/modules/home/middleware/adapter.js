module.exports =()=>{
    return async (req, res, next) => {
        try {
            const {content_id='',class_id=''} = req.query;
            if(class_id){
                res.redirect(`/list/${class_id}`);
                return;
            }
            if(content_id){
                res.redirect(`/article/:id.html`);
                return;
            }

            if(req.url.includes('/a/')){
                let url = req.url.replace('/a/','/');
                res.redirect(url);
                return;
            }
          await next();
        } catch (error) {
          next(error);
        }
      };
}