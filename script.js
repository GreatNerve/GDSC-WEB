function DROPDOWNFUNTION() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


let data = [
  {
    'id': 0,
    'title': "Newton's law of universal gravitation",
    'para': `Newton's law of universal gravitation is usually stated as that every particle attracts every other particle in the universe with a force that is proportional to the product of their masses and inversely proportional to the square of the distance between their centers. The publication of the law has become known as the "first great unification", as it marked the unification of the previously described phenomena of gravity on Earth with known astronomical behaviors.This is a general physical law derived from empirical observations by what Isaac Newton called inductive reasoning. It is a part of classical mechanics and was formulated in Newton's work Philosophiæ Naturalis Principia Mathematica ("the Principia"), first published on 5 July 1687. When Newton presented Book 1 of the unpublished text in April 1686 to the Royal Society, Robert Hooke made a claim that Newton had obtained the inverse square law from him. In today's language, the law states that every point mass attracts every other point mass by a force acting along the line intersecting the two points. The force is proportional to the product of the two masses, and inversely proportional to the square of the distance between them.The equation for universal gravitation thus takes the form: F = G m 1 m 2 r 2 , {\displaystyle F=G{\frac {m_{1}m_{2}}{r^{2}}},} where F is the gravitational force acting between two objects, m1 and m2 are the masses of the objects, r is the distance between the centers of their masses, and G is the gravitational constant. The first test of Newton's law of gravitation between masses in the laboratory was the Cavendish experiment conducted by the British scientist Henry Cavendish in 1798. It took place 111 years after the publication of Newton's Principia and approximately 71 years after his death. Newton's law of gravitation resembles Coulomb's law of electrical forces, which is used to calculate the magnitude of the electrical force arising between two charged bodies. Both are inverse-square laws, where force is inversely proportional to the square of the distance between the bodies. Coulomb's law has charge in place of mass and a different constant. Newton's law has later been superseded by Albert Einstein's theory of general relativity, but the universality of the gravitational constant is intact and the law still continues to be used as an excellent approximation of the effects of gravity in most applications. Relativity is required only when there is a need for extreme accuracy, or when dealing with very strong gravitational fields, such as those found near extremely massive and dense objects, or at small distances (such as Mercury's orbit around the Sun).`,
    'topics': ['Physics', 'Mathematics', 'Science'],
    'date': '2021-06-01',
    'author': 'Siddharth',
    'likes': 21,
    'comments': 15,
    'views': 55,
    'recent': "Autor"
  },
  {
    'id': 1,
    'title': "Star Wars: The Rise of Skywalker",
    'para': `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. Produced by Lucasfilm and Abrams' production company Bad Robot Productions, and distributed by Walt Disney Studios Motion Pictures, it is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker saga". Its ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, Ian McDiarmid, and Billy Dee Williams. Set one year after The Last Jedi, The Rise of Skywalker follows Rey, Finn, and Poe Dameron as they lead the Resistance's final stand against Supreme Leader Kylo Ren and the First Order, who are aided by the return of the Galactic Emperor, Palpatine. Following initial reports that The Last Jedi director Rian Johnson would write the script for Episode IX, in August 2015, Colin Trevorrow was hired to direct and to write a script with his collaborator Derek Connolly; both ultimately retain story credit with Abrams and Chris Terrio. In September 2017, Trevorrow left the project following creative differences with producer Kathleen Kennedy, and Abrams returned as director. John Williams, composer for the previous episodic films, returned to compose the score—his final score for the franchise. Principal photography began in August 2018 at Pinewood Studios in England and wrapped in February 2019, with post-production completed in November 2019. With a budget of $416 million, it is the third most expensive film ever made. The Rise of Skywalker premiered in Hollywood, Los Angeles, on December 16, 2019, and was released in the United States on December 20. It received mixed reviews from critics and grossed over $1.077 billion worldwide, making it the seventh-highest-grossing film of 2019; although it was the lowest-grossing installment of the trilogy, it turned an estimated net profit of $300 million (with an assumed production budget of $275 million; the true $416 million budget would decrease profits to $150 million). It received three nominations at the 92nd Academy Awards (Best Original Score, Best Visual Effects, and Best Sound Editing) as well as three at the 73rd British Academy Film Awards (also Best Special Visual Effects, Best Original Music, and Best Sound). It won five awards at the 46th Saturn Awards, including Best Science Fiction Film.`,
    'topics': ['Movies', 'Science Fiction', 'Star Wars'],
    'date': '2021-06-01',
    'author': 'Siddharth',
    'likes': 25,
    'comments': 12,
    'views': 85,
    'recent': "Autor"
  },
  {
    'id': 2,
    'title': "History of the Republic of India (1947–present)",
    'para': `The history of independent India began when the country became an independent nation within the British Commonwealth on 15 August 1947. Direct administration by the British, which began in 1858, affected a political and economic unification of the subcontinent. When British rule came to an end in 1947, the subcontinent was partitioned along religious lines into two separate countries—India, with a majority of Hindus, and Pakistan, with a majority of Muslims. Concurrently the Muslim-majority northwest and east of British India was separated into the Dominion of Pakistan, by the Partition of India. The partition led to a population transfer of more than 10 million people between India and Pakistan and the death of about one million people. Indian National Congress leader Jawaharlal Nehru became the first Prime Minister of India, but the leader most associated with the independence struggle, Mahatma Gandhi, accepted no office. The constitution adopted in 1950 made India a democratic republic with Westminster style parliamentary system of government, both at federal and state level respectively.The democracy has been sustained since then. India's sustained democratic freedoms are unique among the world's newly independent states.The nation has faced religious violence, naxalism, terrorism and regional separatist insurgencies. India has unresolved territorial disputes with China which escalated into a war in 1962 and 1967, and with Pakistan which resulted in wars in 1947, 1965, 1971 and 1999. India was neutral in the Cold War, and was a leader in the Non-Aligned Movement. However, it made a loose alliance with the Soviet Union from 1971, when Pakistan was allied with the United States and the People's Republic of China. India is a nuclear-weapon state, having conducted its first nuclear test in 1974, followed by another five tests in 1998. From the 1950s to the 1980s, India followed socialist-inspired policies. The economy was influenced by extensive regulation, protectionism and public ownership, leading to pervasive corruption and slow economic growth. Since 1991, India has pursued more economic liberalisation. Today, India is the third largest and one of the fastest-growing economies in the world. From being a relatively struggling country in its formative years, the Republic of India has emerged as a fast growing G20 major economy. India has sometimes been referred to as a great power and a potential superpower given its large and growing economy, military and population.`,
    'topics': ['History', 'India', 'Politics'],
    'date': '2021-06-01',
    'author': 'Siddharth',
    'likes': 25,
    'comments': 12,
    'views': 85,
    'recent': "Autor"
  }
];

function addMainData(x) {
  let Data = data[x];

  let topics = '';
  for (const key in Data['topics']) {
    topics += `<li>${Data['topics'][key]}</li>`;
  }

  let content = `
  <a href="" class="contentPage" data-id='${Data['id']}'>
  <div class="data_box">
      <div class="title_data">${Data['title']}</div>
      <div class="detail_data">
          <div class="posted_data">Posted By : User</div>
          <div class="topic_data">
              <ul>
                  ${topics}
              </ul>
          </div>
      </div>
      <div class="stas_box">
          <div class="replied_data">${Data['comments']}</div>
          <div class="liked_data">${Data['likes']}</div>
          <div class="view_data">${Data['views']}</div>
          <div class="Recently_data">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                  <path
                      d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
              ${Data['recent']}
          </div>
      </div>
  </div>
</a>`;
  $('#form_data').append(content);
}

$(document).ready(function () {

  // alert("Welcome to my website!");
  $('#form_data').empty();
  for (let index = 0; index < data.length; index++) {
    addMainData(index);
    
  }
  $('.contentPage').click(function (e) { 
    e.preventDefault();
    let id = $(this).attr('data-id');
    // window.location.href = `./content.html?id=${id}`;
      alert($(this).attr('data-id'));
  });

});