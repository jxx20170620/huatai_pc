

// import $ from 'jquery'

let api_Ip = 'http://192.168.1.125:8081';

export const addCourse = (formData) => {
     return new Promise((resolve, reject) => {

          fetch(api_Ip + '/eLearning/Course/savecourse', {
               method: "POST",
               body: formData,
          }).then(function(res) {
               if (res.ok) {
                    resolve(res);
               } else {
                    reject(res);
               }
          }).catch(function(err) {
               // console.log(err)
               reject(err);
          });

          // $.ajax({
          //      url: api_Ip + '/eLearning/Course/savecourse',
          //      type: "POST",
          //      data: formData,
          //      contentType: false,
          //      processData: false,
          //      success: function(result) {
          //           resolve(result)
          //      },
          //      error: function(msg) {
          //           reject(msg)
          //      }
          // })

     });
}
