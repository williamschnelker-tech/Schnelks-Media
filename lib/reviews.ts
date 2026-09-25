// Real Google reviews left by clients' customers after receiving our review-request text.
// Copied word for word from Google. Last names shortened to an initial for privacy.
// One former client is intentionally not named: their company name is replaced with [They].
export type Review = {
  name: string;
  company: string;
  rating: number;
  text?: string;
  service?: string;
};

export const reviews: Review[] = [
  {
    name: 'Lily L.',
    company: 'HamHam Tree Service',
    rating: 5,
    text: `A huge tree fail and landed on a shed and fences.
Lucky for us it was just resting on the side of the shade and on top of the fence without creating a major damage.
Austin from Ham Ham and his team using their exceptional problem solving skill and their skills as tree removers were able to remove the tree without causing any further damage to shade and fences.
Before they left, they cleaned the area thoroughly including the top of the shade and did a good job of mending the few fence's boards which became loose as the result of the tree fall.
Kudos 👏🏻 💐 for well done job and again thank you so much
Lily`,
  },
  {
    name: 'Rory C.',
    company: 'A Michigan tree service',
    rating: 5,
    service: 'Tree removal',
    text: "Had a very tall pine tree dropping branches on my house. [They] removed it quickly and safely. Their clean up was incredible. Highly recommend them!",
  },
  {
    name: 'Shawn P.',
    company: 'HamHam Tree Service',
    rating: 5,
  },
];
