// Explica este código JavaScript 😎

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
}, 0);
