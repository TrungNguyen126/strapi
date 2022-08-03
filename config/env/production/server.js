module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: env.array('hwnlSxqcyyCqd5fhl2rPJQ==,VKKvFbM1jQKrdxw6Fm9kwQ==,hEtMnASs12xuPBy+QmYAog==,W6TOmRAvUz/Uh6z41QLvIg==')
    },
  });