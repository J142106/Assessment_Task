const express = require('express')
const app = express()

app.route('/data').get((req, res) => {
    res.json({
        "student": [{
            id: 1,
            imgSrc: 'https://www.entoin.com/images/chara50.jpg',
            title: 'Earle Meyer',
            desc: 'That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.'
        },
        {
            id: 2,
            imgSrc: 'https://whatnerd.com/wp-content/uploads/2022/04/best-cute-anime-girl-characters-lovable-ranked-marin-kitagawa-featured.jpg',
            title: 'Lilian Montes',
            desc: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it."
        },
        {
            id: 3,
            imgSrc: 'https://animemotivation.com/wp-content/uploads/2019/05/houtarou-oreki-peace-sign.jpg',
            title: 'Bettye Barnett',
            desc: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. "
        },
        {
            id: 4,
            imgSrc: 'https://media.hitekno.com/thumbs/2022/07/02/41023-spy-x-family-anya-forger/730x480-img-41023-spy-x-family-anya-forger.jpg',
            title: 'Jacinto Love',
            desc: "He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen."
        },
        {
            id: 5,
            imgSrc: 'https://i.pinimg.com/736x/0e/be/5c/0ebe5cde278c00a3bc51b48860546190.jpg',
            title: 'Gracie Harrell',
            desc: "The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate."
        },
        {
            id: 6,
            imgSrc: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-cute-anime-avatar-profile-picture-14.jpg',
            title: 'Saundra Fields',
            desc: "He was after the truth. At least, that's what he told himself. He believed it, but any rational person on the outside could see he was lying to himself. It was apparent he was really only after his own truth that he'd already decided and was after this truth because the facts didn't line up with the truth he wanted. "
        },
        {
            id: 7,
            imgSrc: 'https://i.pinimg.com/736x/c6/09/bb/c609bb04bcdb4f584c5cc12f70b251f5.jpg',
            title: 'Hollis Turner',
            desc: "He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth. It was time to decide which way to go."
        },
        {
            id: 8,
            imgSrc: 'https://w.wallha.com/ws/12/5USlvbiX.jpg',
            title: 'Amelia Vargas',
            desc: "I love the feel of wood curls flying off the lathe as I begin to shape the log in front of me. The sound of scraping changes based on the wetness of the wood, the speed at which the lathe is turning, and the type of cut I am making. The smell and feel of wet wood being turned are unique. "
        }],

        "course": [{
            id: 1,
            imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            title: 'Biotransport',
            desc: "'What is the best way to get what you want?' she asked. He looked down at the ground knowing that she wouldn't like his answer. He hesitated, knowing that the truth would only hurt. How was he going to tell her that the best way for him to get what he wanted was to leave her?"
        },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'Photography',
            desc: "Her hand was balled into a fist with her keys protruding out from between her fingers. This was the weapon her father had shown her how to make when she walked alone to her car after work. She wished that she had something a little more potent than keys between her fingers."
        },
        {
            id: 3,
            imgSrc: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png',
            title: 'Markets',
            desc: "It would have been nice to have some mace or pepper spray. He had been meaning to buy some but had never gotten around to it. As the mother bear took another step forward with her cubs in tow, she knew her fist with keys wasn't going to be an adequate defense for this situation."
        },
        {
            id: 4,
            imgSrc: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
            title: 'Astronomy',
            desc: "Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found."
        },
        {
            id: 5,
            imgSrc: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
            title: 'Biochemistry',
            desc: "At that moment he had a thought that he'd never imagine he'd consider. 'I could just cheat,' he thought, 'and that would solve the problem.' He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to."
        },
        {
            id: 6,
            imgSrc: 'https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0',
            title: 'Philosophy',
            desc: "She looked at her student wondering if she could ever get through. 'You need to learn to think for yourself,' she wanted to tell him. 'Your friends are holding you back and bringing you down.' But she didn't because she knew his friends were all that he had and even if that meant a life of misery, he would never give them up."
        },
        {
            id: 7,
            imgSrc: 'https://miro.medium.com/max/775/0*rZecOAy_WVr16810',
            title: 'Probability ',
            desc: "Ten more steps. If he could take ten more steps it would be over, but his legs wouldn't move. He tried to will them to work, but they wouldn't listen to his brain. Ten more steps and it would be over but it didn't appear he would be able to do it."
        },
        {
            id: 8,
            imgSrc: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg',
            title: 'Moral',
            desc: "She tried to explain that love wasn't like pie. There wasn't a set number of slices to be given out. There wasn't less to be given to one person if you wanted to give more to another. That after a set amount was given out it would all disappear. She tried to explain this, but it fell on deaf ears."
        },
        {
            id: 9,
            imgSrc: 'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg',
            title: 'Programming',
            desc: "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next."
        },
        {
            id: 10,
            imgSrc: 'https://www.adobe.com/express/feature/image/media_1b8b30dbb41a40550d7bacf515d27d946b8442157.png?width=750&format=png&optimize=medium',
            title: 'Iconography',
            desc: "With six children in tow, Catherine raced to the airport departing gate. This wasn't an easy task as the children had other priorities than to get to the gate. She knew that she was tight on time and the frustration came out as she yelled at the kids to keep up. They continued to test her, pretending not to listen and to move in directions that only slowed them down."
        },
        {
            id: 11,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/car-image-design-maker.jpg',
            title: 'Mobility',
            desc: "Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship."
        },
        {
            id: 12,
            imgSrc: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg',
            title: 'Education',
            desc: "Mary had to make a decision and she knew that whatever decision she made, it would upset someone. It seemed like such a silly reason for people to get upset but she knew the minute that she began to consider doing it that there was no way everyone in her life would be pleased with what she ultimately decided to do. It was simply a question of who she would rather displease most. "
        }],

        "course_record": [{
            id: 1,
            user: "Earle Meyer",
            course: "Philosophy",
        },
        {
            id: 1,
            user: "Earle Meyer",
            course: "Moral",
        },
        {
            id: 1,
            user: "Lilian Montes",
            course: "Biotransport"
        },
        {
            id: 1,
            user: "Bettye Barnett",
            course: "Biotransport"
        },
        {
            id: 1,
            user: "Bettye Barnett",
            course: "Philosophy",
        },
        {
            id: 1,
            user: "Jacinto Love",
            course: "Moral",
        },
        {
            id: 1,
            user: "Gracie Harrell",
            course: "Astronomy"
        },
        {
            id: 1,
            user: "Saundra Fields",
            course: "Astronomy"
        }, 
        {
            id: 1,
            user: "Hollis Turner",
            course: "Moral",
        },
        {
            id: 1,
            user: "Amelia Vargas",
            course: "Biotransport"
        },
        {
            id: 1,
            user: "Amelia Vargas",
            course: "Astronomy"
        }]

    },
    );
})

app.listen(5000, () => { console.log("Server started on port 5000") })