
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('urlLinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('urlLinks').insert([
        {user_id: 1, url: 'https://images.pexels.com/photos/2071518/pexels-photo-2071518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1598366/pexels-photo-1598366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2059088/pexels-photo-2059088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2055957/pexels-photo-2055957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2044868/pexels-photo-2044868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2067659/pexels-photo-2067659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2064868/pexels-photo-2064868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://marketplace.canva.com/MADGv7WMznk/6/screen/canva-top-view-photography-of-people-MADGv7WMznk.jpg'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2071216/pexels-photo-2071216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2059146/pexels-photo-2059146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1823743/pexels-photo-1823743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2067592/pexels-photo-2067592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2068250/pexels-photo-2068250.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2092453/pexels-photo-2092453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2047420/pexels-photo-2047420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://marketplace.canva.com/MACWWl2DQOs/1/screen/canva-giraffe%2C-animal%2C-nature%2C-wildlife-MACWWl2DQOs.jpg'},
        {user_id: 1, url: 'https://marketplace.canva.com/MAC4GKxEq-U/1/screen/canva-robin%2C-birds%2C-animals%2C-wildlife%2C-feathery-MAC4GKxEq-U.jpg'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1786769/pexels-photo-1786769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2090705/pexels-photo-2090705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1142987/pexels-photo-1142987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2086917/pexels-photo-2086917.png?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://images2.alphacoders.com/498/thumb-1920-498798.jpg'},
        {user_id: 1, url: 'https://i.pinimg.com/originals/8d/50/62/8d506254b886dc7a5f479232a2622472.jpg'},
        {user_id: 1, url: 'https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {user_id: 1, url: 'https://media.istockphoto.com/photos/student-searching-books-picture-id623200866'}
      ]);
    });
};
