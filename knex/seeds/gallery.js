
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        { title: 'thor ragnarock', author: 'taika waiti', link: 'http://www.gstatic.com/tv/thumb/v22vodart/12402331/p12402331_v_v8_ay.jpg', description: 'Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk.' },
        { title: 'the dark knight', author: 'christopher nolan', link: 'http://www.gstatic.com/tv/thumb/v22vodart/173378/p173378_v_v8_at.jpg', description: 'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City.' },
        { title: 'avatar', author: 'james cameron', link: 'http://www.gstatic.com/tv/thumb/v22vodart/3542039/p3542039_v_v8_ac.jpg', description: 'On the lush alien world of Pandora live the Navi, beings who appear primitive but are highly evolved. Because the planets environment is poisonous, human/Navi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora.' },
        { title: 'pulp fiction', author: 'quentin tarantino', link: 'http://www.gstatic.com/tv/thumb/v22vodart/15684/p15684_v_v8_ab.jpg', description: 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions.' },
        { title: 'the departed', author: 'martin scorsese', link: 'http://www.gstatic.com/tv/thumb/v22vodart/162564/p162564_v_v8_ah.jpg', description: 'South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson).' },
        { title: 'a simple favor', author: 'Paul Feig', link: 'http://www.gstatic.com/tv/thumb/v22vodart/15223195/p15223195_v_v8_ab.jpg', description: 'A SIMPLE FAVOR, directed by Paul Feig, centers around Stephanie (Anna Kendrick), a mommy vlogger who seeks to uncover the truth behind her best friend Emilys (Blake Lively) sudden disappearance from their small town.' },
        { title: 'guardians of the galaxy', author: 'James Gunn', link: 'http://www.gstatic.com/tv/thumb/v22vodart/10108283/p10108283_v_v8_aj.jpg', description: 'Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain.' }


      ]);
    });
};
