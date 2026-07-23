import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

console.log("DATABASE_URL loaded:", connectionString ? "✓" : "✗");
console.log("Actual DATABASE_URL:", connectionString ? connectionString.substring(0, 50) + "..." : "undefined");

const pool = new Pool({
  connectionString,
});

pool.on("error", (err) => {
  console.error("Pool connection error:", err.message);
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
    const userId = "90cffbde-6fe4-4100-81be-7c3d9164eb79";
    const movies = [
  {
    title: "The Shawshank Redemption",
    overviiew: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genres: ["Drama", "Crime"],
    runtime: 142,
    posterUrl: "https://example.com/shawshank.jpg",
    createdBy: userId,
  },
  {
    title: "The Godfather",
    overviiew: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    releaseYear: 1972,
    genres: ["Drama", "Crime"],
    runtime: 175,
    posterUrl: "https://example.com/godfather.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overviiew: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/darkknight.jpg",
    createdBy: userId,
  },
  {
    title: "Pulp Fiction",
    overviiew: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    genres: ["Drama", "Crime"],
    runtime: 154,
    posterUrl: "https://example.com/pulpfiction.jpg",
    createdBy: userId,
  },
  {
    title: "Forrest Gump",
    overviiew: "The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man with an IQ of 75.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    runtime: 142,
    posterUrl: "https://example.com/forrestgump.jpg",
    createdBy: userId,
  },
  {
    title: "Inception",
    overviiew: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    releaseYear: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overviiew: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl: "https://example.com/matrix.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overviiew: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createdBy: userId,
  },
  {
    title: "The Lion King",
    overviiew: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    releaseYear: 1994,
    genres: ["Animation", "Adventure", "Family"],
    runtime: 88,
    posterUrl: "https://example.com/lionking.jpg",
    createdBy: userId,
  },
  {
    title: "Avatar",
    overviiew: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    releaseYear: 2009,
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 162,
    posterUrl: "https://example.com/avatar.jpg",
    createdBy: userId,
  },
  {
    title: "Titanic",
    overviiew: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    releaseYear: 1997,
    genres: ["Drama", "Romance"],
    runtime: 194,
    posterUrl: "https://example.com/titanic.jpg",
    createdBy: userId,
  },
  {
    title: "Gladiator",
    overviiew: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    releaseYear: 2000,
    genres: ["Action", "Adventure", "Drama"],
    runtime: 155,
    posterUrl: "https://example.com/gladiator.jpg",
    createdBy: userId,
  },
  {
    title: "The Avengers",
    overviiew: "Earth's mightiest heroes must come together and learn to fight as a team to save the planet from an alien invasion.",
    releaseYear: 2012,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 143,
    posterUrl: "https://example.com/avengers.jpg",
    createdBy: userId,
  },
  {
    title: "Jurassic Park",
    overviiew: "A pragmatic paleontologist tours an almost complete theme park with a couple and their kids as another worker attempts to steal embryos.",
    releaseYear: 1993,
    genres: ["Adventure", "Sci-Fi", "Thriller"],
    runtime: 127,
    posterUrl: "https://example.com/jurassicpark.jpg",
    createdBy: userId,
  },
  {
    title: "The Silence of the Lambs",
    overviiew: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    releaseYear: 1991,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 118,
    posterUrl: "https://example.com/silenceofthelambs.jpg",
    createdBy: userId,
  },
  {
    title: "The Social Network",
    overviiew: "As Harvard student Mark Zuckerberg creates the social networking site Facebook, he is sued by multiple people who claimed to be the site's inspiration.",
    releaseYear: 2010,
    genres: ["Biography", "Drama"],
    runtime: 120,
    posterUrl: "https://example.com/socialnetwork.jpg",
    createdBy: userId,
  },
  {
    title: "Dune",
    overviiew: "Paul Atreides, a brilliant young man, must travel to the dangerous planet Dune to ensure the future of his family and people.",
    releaseYear: 2021,
    genres: ["Action", "Adventure", "Drama"],
    runtime: 156,
    posterUrl: "https://example.com/dune.jpg",
    createdBy: userId,
  },
  {
    title: "The Conjuring",
    overviiew: "Paranormal investigators work to help a family terrorized by a dark presence in their farmhouse.",
    releaseYear: 2013,
    genres: ["Horror", "Mystery", "Thriller"],
    runtime: 112,
    posterUrl: "https://example.com/conjuring.jpg",
    createdBy: userId,
  },
  {
    title: "Parasite",
    overviiew: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseYear: 2019,
    genres: ["Drama", "Thriller"],
    runtime: 132,
    posterUrl: "https://example.com/parasite.jpg",
    createdBy: userId,
  },
  {
    title: "Spider-Man: No Way Home",
    overviiew: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start appearing.",
    releaseYear: 2021,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 159,
    posterUrl: "https://example.com/spiderman.jpg",
    createdBy: userId,
  }
];

const main = async ()=>{
    for (const movie of movies) {
        await prisma.movie.create({
            data:movie,
        });
        console.log(`Created movie: ${movie.title}`)
    }
    console.log("Seeding completed")
}

main().catch((err)=>{
    console.error(err);
    process.exit(1)
}).finally(async ()=>{
    await prisma.$disconnect();
});