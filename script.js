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


var data = [
  {
    
    'id': 0,
    'title': "How to use it and its features",
    'para': `This single Page project have all feature requied for GDSC taks(including 3 page, Adding New fourm, local storage,working like and view counter, and many mor).
    if you want to add new fourm you can click on the add new fourm button on the top right corner of the page and fill the form and submit it.
    if you want to see the fourm you can click on the fourm title and it will show you the fourm with all the details.
    if you want to go back to the home page you can click on the go back button.
    if you want to like the fourm you can click on the like button and it will increase the like count.
    the view is automatically increase when you click on the fourm title.
    it is a single page project so you can not go back to the previous page by clicking on the back button of the browser.
    it is full responsive so you can use it on any device.`,
    'topics': ['Feature','Guide'],
    'date': '2021-06-01',
    'author': 'Dheeraj Sharma',
    'likes': 60,
    'comments': 50,
    'views': 100,
    'recent': "Autor"
  },
  {
    
    'id': 1,
    'title': "Newton's law of universal gravitation",
    'para': `Newton's law of universal gravitation is usually stated as that every particle attracts every other particle in the universe with a force that is proportional to the product of their masses and inversely proportional to the square of the distance between their centers. The publication of the law has become known as the "first great unification", as it marked the unification of the previously described phenomena of gravity on Earth with known astronomical behaviors.This is a general physical law derived from empirical observations by what Isaac Newton called inductive reasoning. It is a part of classical mechanics and was formulated in Newton's work Philosophiæ Naturalis Principia Mathematica ("the Principia"), first published on 5 July 1687. When Newton presented Book 1 of the unpublished text in April 1686 to the Royal Society, Robert Hooke made a claim that Newton had obtained the inverse square law from him. In today's language, the law states that every point mass attracts every other point mass by a force acting along the line intersecting the two points. The force is proportional to the product of the two masses, and inversely proportional to the square of the distance between them.The equation for universal gravitation thus takes the form: F = G m 1 m 2 r 2 , {\displaystyle F=G{\frac {m_{1}m_{2}}{r^{2}}},} where F is the gravitational force acting between two objects, m1 and m2 are the masses of the objects, r is the distance between the centers of their masses, and G is the gravitational constant. The first test of Newton's law of gravitation between masses in the laboratory was the Cavendish experiment conducted by the British scientist Henry Cavendish in 1798. It took place 111 years after the publication of Newton's Principia and approximately 71 years after his death. Newton's law of gravitation resembles Coulomb's law of electrical forces, which is used to calculate the magnitude of the electrical force arising between two charged bodies. Both are inverse-square laws, where force is inversely proportional to the square of the distance between the bodies. Coulomb's law has charge in place of mass and a different constant. Newton's law has later been superseded by Albert Einstein's theory of general relativity, but the universality of the gravitational constant is intact and the law still continues to be used as an excellent approximation of the effects of gravity in most applications. Relativity is required only when there is a need for extreme accuracy, or when dealing with very strong gravitational fields, such as those found near extremely massive and dense objects, or at small distances (such as Mercury's orbit around the Sun).`,
    'topics': ['Physics', 'Science'],
    'date': '2021-06-01',
    'author': 'Dheeraj',
    'likes': 8,
    'comments': 14,
    'views': 30,
    'recent': "Autor"
  },
  {
    'id': 2,
    'title': "Star Wars: The Rise of Skywalker",
    'para': `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. Produced by Lucasfilm and Abrams' production company Bad Robot Productions, and distributed by Walt Disney Studios Motion Pictures, it is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker saga". Its ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, Ian McDiarmid, and Billy Dee Williams. Set one year after The Last Jedi, The Rise of Skywalker follows Rey, Finn, and Poe Dameron as they lead the Resistance's final stand against Supreme Leader Kylo Ren and the First Order, who are aided by the return of the Galactic Emperor, Palpatine. Following initial reports that The Last Jedi director Rian Johnson would write the script for Episode IX, in August 2015, Colin Trevorrow was hired to direct and to write a script with his collaborator Derek Connolly; both ultimately retain story credit with Abrams and Chris Terrio. In September 2017, Trevorrow left the project following creative differences with producer Kathleen Kennedy, and Abrams returned as director. John Williams, composer for the previous episodic films, returned to compose the score—his final score for the franchise. Principal photography began in August 2018 at Pinewood Studios in England and wrapped in February 2019, with post-production completed in November 2019. With a budget of $416 million, it is the third most expensive film ever made. The Rise of Skywalker premiered in Hollywood, Los Angeles, on December 16, 2019, and was released in the United States on December 20. It received mixed reviews from critics and grossed over $1.077 billion worldwide, making it the seventh-highest-grossing film of 2019; although it was the lowest-grossing installment of the trilogy, it turned an estimated net profit of $300 million (with an assumed production budget of $275 million; the true $416 million budget would decrease profits to $150 million). It received three nominations at the 92nd Academy Awards (Best Original Score, Best Visual Effects, and Best Sound Editing) as well as three at the 73rd British Academy Film Awards (also Best Special Visual Effects, Best Original Music, and Best Sound). It won five awards at the 46th Saturn Awards, including Best Science Fiction Film.`,
    'topics': ['Movies', 'Star Wars'],
    'date': '2021-06-01',
    'author': 'Dheeraj',
    'likes': 30,
    'comments': 20,
    'views': 40,
    'recent': "Autor"
  },
  {
    'id': 3,
    'title': "History of the Republic of India (1947–present)",
    'para': `The history of independent India began when the country became an independent nation within the British Commonwealth on 15 August 1947. Direct administration by the British, which began in 1858, affected a political and economic unification of the subcontinent. When British rule came to an end in 1947, the subcontinent was partitioned along religious lines into two separate countries—India, with a majority of Hindus, and Pakistan, with a majority of Muslims. Concurrently the Muslim-majority northwest and east of British India was separated into the Dominion of Pakistan, by the Partition of India. The partition led to a population transfer of more than 10 million people between India and Pakistan and the death of about one million people. Indian National Congress leader Jawaharlal Nehru became the first Prime Minister of India, but the leader most associated with the independence struggle, Mahatma Gandhi, accepted no office. The constitution adopted in 1950 made India a democratic republic with Westminster style parliamentary system of government, both at federal and state level respectively.The democracy has been sustained since then. India's sustained democratic freedoms are unique among the world's newly independent states.The nation has faced religious violence, naxalism, terrorism and regional separatist insurgencies. India has unresolved territorial disputes with China which escalated into a war in 1962 and 1967, and with Pakistan which resulted in wars in 1947, 1965, 1971 and 1999. India was neutral in the Cold War, and was a leader in the Non-Aligned Movement. However, it made a loose alliance with the Soviet Union from 1971, when Pakistan was allied with the United States and the People's Republic of China. India is a nuclear-weapon state, having conducted its first nuclear test in 1974, followed by another five tests in 1998. From the 1950s to the 1980s, India followed socialist-inspired policies. The economy was influenced by extensive regulation, protectionism and public ownership, leading to pervasive corruption and slow economic growth. Since 1991, India has pursued more economic liberalisation. Today, India is the third largest and one of the fastest-growing economies in the world. From being a relatively struggling country in its formative years, the Republic of India has emerged as a fast growing G20 major economy. India has sometimes been referred to as a great power and a potential superpower given its large and growing economy, military and population.`,
    'topics': ['History', 'India'],
    'date': '2021-06-01',
    'author': 'Dheeraj',
    'likes': 25,
    'comments': 9,
    'views': 60,
    'recent': "Autor"
  }
];


function DHEERAJSHARMA(x) {
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
          <div class="posted_data">Posted By : ${Data['author']}</div>
          <div class="topic_data">
              <ul>
                  ${topics}
              </ul>
          </div>
      </div>
      <div class="stas_box">
      <div class="view_data">${Data['views']}</div>
      <div class="liked_data">${Data['likes']}</div>
      <div class="replied_data">${Data['comments']}</div>
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
  $('.contentPage').click(function (e) {
    let id = $(this).attr('data-id');
    e.preventDefault();
    ShowForm(id);
  });

}




$("#addPage").submit(function (e) {
  e.preventDefault();
  alert("Submitted");
  let title = $('#title').val();
  let para = $('#text_para').val();
  let tops = $('#topic_input').val();
  let date = new Date();
  let author = $('#author').val().trim().toUpperCase();
  let likes = 0;
  let comments = 0;
  let views = 0;
  let recent = 'Autor';
  let id = data.length;
  let topics = tops.split(',');
  for (let index = 0; index < topics.length; index++) {
    topics[index] = topics[index].trim();
  }
  if (author == '') {
    author = 'Dheeraj Sharma';
  }
  let content = {
    'id': id,
    'title': title,
    'para': para,
    'topics': topics,
    'date': date,
    'author': author,
    'likes': likes,
    'comments': comments,
    'views': views,
    'recent': recent
  };
  data.push(content);
  DHEERAJSHARMA(id);
  $('#add_page').addClass('d-none');
  $('#HomePage').removeClass('d-none');
  $('html, body').animate({
    scrollTop: 0
  }, 600, 'swing');
  $('#title').val('');
  $('#text_para').val('');
  $('#topic_input').val('');
  $('#author').val('');
  localStorage.setItem("data", JSON.stringify(data));
});






function ShowForm(params) {

  data[params]['views'] += 1;
  let Data = data[params];
  // console.log(Data);
  let content = `<div class="showPage" data-id="${Data['id']}">
    <h2 class="titleOfPage">${Data['title']}</h2>
    <hr>
    <div class="contenBox">
        <p class="paraOfPage">
        ${Data['para']}
        </p>
    </div>
    <hr>
    <div class="showStats">
        <div>
          <button class="btn btn-light-green Back">Go Back</button>
        </div>
        <div class="">
            <button href="">
            ${Data['views']}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path
                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
            </button>
        </div>
        <div class="">
            <button class="addLike" data-id="${Data['id']}">

                ${Data['likes']}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
                </a>
        </div>
        <div class="reply">
            <button class="">
            ${Data['comments']}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
                    <path
                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                </svg>
            </button>
        </div>
        

    </div>
  </div>`;

  $('#sPage').empty();
  $('#sPage').append(content);
  $('html, body').animate({
    scrollTop: 0
  }, 600, 'swing');
  $('#sPage').removeClass('d-none');
  $('#HomePage').addClass('d-none');
  $('.Back').click(function (e) {
    e.preventDefault();
  $('.sortbtn.d-none').click();

    $('#sPage').addClass('d-none');
    $('#HomePage').removeClass('d-none');
    $('html, body').animate({
      scrollTop: 0
    }, 600, 'swing');
    localStorage.setItem("data", JSON.stringify(data));
  });




  $('.addLike').click(function (e) {
    e.preventDefault();
    data[params]['likes'] += 1;
    let liker = `${data[params]['likes']}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
    class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
    </svg>`
    $('.addLike').html(liker);
    localStorage.setItem("data", JSON.stringify(data));
  });


}

$('.menu_button').click(function (e) {
  e.preventDefault();
  $('.unexpan').toggleClass('show');
});

$('.newCreate').click(function (e) {
  e.preventDefault();
  $('#HomePage').addClass('d-none');
  $('#add_page').removeClass('d-none');
  $('html, body').animate({
    scrollTop: 0
  }, 600, 'swing');
});

$('.BackHome').click(function (e) {
  e.preventDefault();
  $('#form_data').empty();
  for (let index = 0; index < data.length; index++) {
    DHEERAJSHARMA(index);

  }

  $('#add_page').addClass('d-none');
  $('#HomePage').removeClass('d-none');
  $('html, body').animate({
    scrollTop: 0
  }, 600, 'swing');
});






$(document).ready(function () {

  $('.sortbtn').click(function (e){
    e.preventDefault;
    let SortedData = [...data];
    let sort = $(this).attr('data-sort');
    if(sort == 'views'){
      SortedData.sort(function(a, b){return b.views - a.views});
    }else if(sort == 'likes'){
      SortedData.sort(function(a, b){return b.likes - a.likes});
    }
    // else if(sort == 'comments'){
    //   SortedData.sort(function(a, b){return b.comments - a.comments});
    // }
    else if(sort == 'recent'){
      SortedData.sort(function(a, b){return b.id - a.id});
    }
    $('#form_data').empty();
    for (let index = 0; index < SortedData.length; index++) {
      DHEERAJSHARMA(SortedData[index]['id']);
  
    }
    if(!($(this).hasClass('d-none'))){
      $('.dropbtn').html(`Most ${sort.charAt(0).toUpperCase() + sort.slice(1)}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>`)
      alert('Sorted by Most '+sort.charAt(0).toUpperCase() + sort.slice(1))
    }
    $('.sortbtn').removeClass('d-none');
    console.log(data);
    $(this).addClass('d-none');

  });



  let sesData = localStorage.getItem("data");
  if (sesData != null) {
    data = JSON.parse(sesData);
  } else {
    localStorage.setItem("data", JSON.stringify(data));
  }

  $('#form_data').empty();
  $('.sortbtn.d-none').click();
  alert("Welcome to my website!, I am Dheeraj Sharma");
  alert('If you want to see the fourm you can click on the fourm title and it will show you the fourm with all the details.');
  alert('If you want to add new fourm you can click on the add new fourm button on the top right corner of the page and fill the form and submit it.');
  alert('If you want to like the fourm you can click on the like button and it will increase the like count.');
  alert('the view is automatically increase when you click on the fourm title.');
  alert('If you want to go back to the home page you can click on the go back button.');
  alert('it have fully funtional sort button@DS');
  alert('it is full responsive so you can use it on any device.');


 
});
