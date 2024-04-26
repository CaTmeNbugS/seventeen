const iframe       = document.querySelector('#iframe')
const back         = document.querySelector('#back')
const membersBlock = document.querySelector('.membersBlock')
const personBlock  = document.querySelector('#personBlock')
const personName   = document.querySelector('#personName')
const aboutPerson  = document.querySelector('#aboutPerson')
const personImgs   = document.querySelector('#personImgs')
const video        = document.querySelector('iframe')
const info         = document.querySelector('#info')
const clips        = document.querySelector('#clips')
const tracks       = document.querySelector('#tracks')

let memberBlockPos = false
let currentVideo = 0
let offsets = [
    info.offsetTop,
    personBlock.offsetTop,
    clips.offsetTop,
    tracks.offsetTop
]

const members = [
    {
        name: 'Чхве Сынчоль',
        nick: 'S.Coups',
        avatar: 'https://i.pinimg.com/originals/27/34/01/273401d912bc9b76b533bcb4cdb687c8.png',
        about: 'Лидер группы и её хип-хоп юнита, главный рэпер',
        imgs: [
            'https://i.pinimg.com/736x/41/7d/1d/417d1d3cfe8ade7acd3b21ce154fce59.jpg',
            'https://i.pinimg.com/736x/95/32/a3/9532a3e6734a8bdd4539792d649d2f72.jpg',
            'https://i.pinimg.com/736x/78/c6/93/78c69380d0a93d9535d47388e2234e53.jpg'
        ]
    },
    {
        name: 'Юн Джонхан',
        nick: 'Джонхан',
        avatar: 'https://sun1-83.userapi.com/s/v1/if1/-GO3E9V2exPWN8xLtJB3MHGMhWd2L0vYPVOV_Eqm8cwH-U5L9BTmB1-s6r1fK-VnXFhKL4vq.jpg?size=200x200&quality=96&crop=249,158,775,775&ava=1',
        about: 'Ведущий вокалист, вокальный юнит',
        imgs: [
            'https://i.pinimg.com/736x/df/92/e6/df92e6e0b82601acbed473c7db8577f0.jpg',
            'https://i.pinimg.com/736x/0a/10/56/0a10566987d16c51f165a0bc24c403c5.jpg',
            'https://i.pinimg.com/736x/5e/9a/2c/5e9a2cf6ddde4b91775c408738376684.jpg'
        ]
    },
    {
        name: 'Джошуа Джису Хон',
        nick: 'Джошуа',
        avatar: 'https://sun9-12.userapi.com/impg/JdSjqKlE1iTaYIDs1SZgwy80S_huxfmCmkj9Ig/9EoMQhanltc.jpg?size=600x600&quality=95&sign=c7db757d2b4ed9b2b72279a6a0400cea&c_uniq_tag=I1W26kX3i82Yo2UFebiWqQZ4eeVx71bvbxPnTMtPGYo&type=album',
        about: 'Ведущий вокалист, вокальный юнит',
        imgs: [
            'https://i.pinimg.com/736x/cd/14/11/cd14117f0d9aac03b8146476957442df.jpg',
            'https://i.pinimg.com/736x/cd/42/f4/cd42f49404257ea09b4703456ae672d8.jpg',
            'https://i.pinimg.com/736x/dd/a8/31/dda831983ad4183a9193ff0565831a03.jpg'
        ]
    },
    {
        name: 'Вэнь Джунхуэй',
        nick: 'Джун',
        avatar: 'https://sun9-24.userapi.com/impf/c840726/v840726279/5f9fc/_Rk0F95biAM.jpg?size=320x315&quality=96&sign=37baceb7f4b8681cd46b66d014703494&c_uniq_tag=0_5ie2Iih3nSiSOYIAe3ZEu-gw1-OeoXvnm8vz7gvts&type=album',
        about: 'Ведущий танцор и саб-вокалист, перфоманс юнит',
        imgs: [
            '',
            'https://i.pinimg.com/736x/ae/fd/3b/aefd3b5fdf6071e933aa1148fefa8da5.jpg',
            'https://i.pinimg.com/736x/5d/0d/c2/5d0dc24e6bfdd073e34c30d32f59d08a.jpg'
        ]
    },
    {
        name: 'Квон Сунён',
        nick: 'Хоши',
        avatar: 'https://i.pinimg.com/originals/ee/8c/10/ee8c10bf4987f71258844a225ceab5c3.jpg',
        about: 'Главный танцор и лидер перфоманс-юнита, участник BSS',
        imgs: [
            'https://i.pinimg.com/736x/cb/8a/74/cb8a746344763ee13a9fe3a21d554db0.jpg',
            'https://i.pinimg.com/736x/04/44/19/04441984278a06e48f6b5b080fa68bda.jpg',
            'https://i.pinimg.com/736x/35/8b/f3/358bf3a9068e3326a3d2ad07a2f6091b.jpg'
        ]
    },
    {
        name: 'Чон Вону',
        nick: 'Вону',
        avatar: 'https://i.pinimg.com/736x/42/ef/eb/42efeb5056ce30477b0fd31ee4e5c21d.jpg',
        about: 'Ведущий рэпер и саб-вокалист, хип-хоп юнит',
        imgs: [
            'https://i.pinimg.com/736x/4f/05/52/4f0552fc6d1def7bc64d24c937b2cd55.jpg',
            'https://i.pinimg.com/736x/49/56/00/49560061ccfb8e85a0051f5d2fdee591.jpg',
            'https://i.pinimg.com/736x/66/e3/4b/66e34b8358eecf28efb767354e413cfa.jpg'
        ]
    },
    {
        name: 'Ли Джихун',
        nick: 'Уджи',
        avatar: 'https://i.pinimg.com/originals/5f/6b/bb/5f6bbb7d1ff4f42a6309f2081577b473.jpg',
        about: 'Ведущий вокалист и лидер вокального юнита.',
        imgs: [
            'https://i.pinimg.com/originals/ad/e3/4c/ade34c31cf257b4671572214391bc3dd.jpg',
            'https://i.pinimg.com/736x/2a/7a/f2/2a7af2922792e88a49bdfc237161c4b7.jpg',
            'https://i.pinimg.com/736x/a2/2d/a0/a22da0ad7a39186b37e4c6e97f95b76b.jpg'
        ]
    },
    {
        name: 'Ли Сокмин',
        nick: 'DK',
        avatar: 'https://i.pinimg.com/originals/93/88/91/938891cb8cc3b52a8a6830f3686f5336.jpg',
        about: 'Главный вокалист, вокальный юнит, лидер BSS',
        imgs: [
            'https://i.pinimg.com/736x/a5/46/a8/a546a86db5b72dc3b44b3d03fa0cca90.jpg',
            'https://i.pinimg.com/736x/22/54/c1/2254c12bd178585cf64d0ac75c9c51d0.jpg',
            'https://i.pinimg.com/736x/d5/dc/e7/d5dce7221f87316588a7a814050ee77d.jpg'
        ]
    },
    {
        name: 'Ким Мингю',
        nick: 'Мингю',
        avatar: 'https://sun1-87.userapi.com/s/v1/ig2/pCCgoku1gtfOG9UqFOddzb_nEDBc9sc02zbPHUK4Y0dEWS6jcArMPrPsTXSZoAVeocp8OR4e8r1IgkgA4rKq2pHa.jpg?size=200x200&quality=96&crop=5,53,389,389&ava=1',
        about: 'Ведущий рэпер, саб-вокалист, вижуал, лицо группы, хип-хоп юнит',
        imgs: [
            'https://i.pinimg.com/736x/46/51/67/465167548f5a3215ed84c7114054cb46.jpg',
            'https://i.pinimg.com/736x/6f/2a/72/6f2a72ce96c9a8e9cd555e772fbc4054.jpg',
            'https://i.pinimg.com/736x/77/87/6a/77876a7edbc657a28ea6aeb68c9c80c4--groups-korean-actors.jpg'
        ]
    },
    {
        name: 'Сю Минхао',
        nick: 'The8',
        avatar: 'https://i.pinimg.com/736x/3c/fe/7b/3cfe7b388d8eecb5850ea02a3112246a.jpg',
        about: 'Ведущий танцор, саб-вокалист, рэпер, перфоманс юнит',
        imgs: [
            'https://i.pinimg.com/736x/c0/bc/4e/c0bc4e6d926f132553908653aea037e0.jpg',
            'https://i.pinimg.com/736x/cb/83/67/cb83675f71f07a171fada45619a4dc40.jpg',
            'https://i.pinimg.com/736x/25/77/6e/25776e04d2c61007a44d1243c6d391eb.jpg'
        ]
    },
    {
        name: 'Бу Сынкван',
        nick: 'Сынкван',
        avatar: 'https://i.pinimg.com/736x/e7/71/96/e7719609a84aca43a07033a1d2555608.jpg',
        about: 'Главный вокалист, лицо группы, вокальный юнит, участник BSS',
        imgs: [
            'https://i.pinimg.com/736x/df/70/72/df7072a0169da6a5c9ac9dbfd3a13b91.jpg',
            'https://i.pinimg.com/736x/01/21/99/0121994e903db1628d98a67853c4d17d.jpg',
            'https://i.pinimg.com/736x/ee/72/cb/ee72cba7d9ec6deb7c924fb3691d8867.jpg'
        ]
    },
    {
        name: 'Хансоль Вернон Чхве',
        nick: 'Вернон',
        avatar: 'https://yt3.googleusercontent.com/ytc/AOPolaQL0GhqAqFvPKg7MCoV_JaapKXGV1WTJL5liC_G=s900-c-k-c0x00ffffff-no-rj',
        about: 'Главный рэпер, вокалист, лицо группы, хип-хоп юнит',
        imgs: [
            'https://i.pinimg.com/736x/e5/7b/7c/e57b7c4baf1d3364bdc8805308d94bb7.jpg',
            'https://i.pinimg.com/736x/0a/83/d8/0a83d84241b2afbb8a0533a695ce641c.jpg',
            'https://i.pinimg.com/736x/3f/bb/41/3fbb4105f23cb4f5227a82c516ea9a62.jpg'
        ]
    },
    {
        name: 'Ли Чан',
        nick: 'Дино',
        avatar: 'https://i.pinimg.com/originals/d0/36/e4/d036e4c343910dd48fea7a8816fed6f9.jpg',
        about: 'Главный танцор, ведущий рэпер, саб-вокалист и макнэ, перфоманс юнит',
        imgs: [
            'https://i.pinimg.com/736x/81/f9/d7/81f9d732fe1a92a427c124cbb7c46dae.jpg',
            'https://i.pinimg.com/736x/75/b8/65/75b8651ed9c02a1bb396c673e40eece1.jpg',
            'https://i.pinimg.com/736x/4b/15/7a/4b157a52f79d0a6ab9da1fa232077b27.jpg'
        ]
    }
]

const videos = [
    'zSQ48zyWZrY?si=XvSSdZaJYJ8zGyEC',
    'u4iDL3c0T1c?si=06p2ea7lkPf-epVb',
    'ap14O5-G7UA?si=4t48LL4Pp4MPDZwb',
    '-GQg25oP0S4?si=BFNXiJ9unLUsJc5c',
    'gRnuFC4Ualw?si=W2XNFNUB6OIFbUXf',
    'cr_lx0GSfrA?si=3XKHOgBMBuWl_qQd',
    'jjCBYlzwaY8?si=WAWyI4uAdcN9n0A4',
    'F9CrRG6j2SM?si=sZSkcuflxzZI3zNx',
]

for(let i = 0; i < members.length; i++){
    membersBlock.innerHTML += `
    <div onclick="swPerson(${i})" class="memberBlock">
        <img src='${members[i].avatar}'>
    </div> 
    `
}

function swPerson(id){
    personBlock.classList.add('loading')
    setTimeout(() => {
        personName.innerHTML = members[id].nick
        aboutPerson.innerHTML = members[id].about
        for(let i = 0; i < 3; i++){
            personImgs.children[i].setAttribute('src', members[id].imgs[i])
        }
    }, 250)
    setTimeout(() => {
        personBlock.classList.remove('loading')
    }, 500)
}
function next(dir){
    memberBlockPos = dir
    membersBlock.style.marginLeft = `${+memberBlockPos * -457}px`
}
function nextVideo(dir){
    if(currentVideo + dir >= 0 && currentVideo + dir < videos.length){
        currentVideo += dir
        video.setAttribute('src', `https://www.youtube.com/embed/${videos[currentVideo]}`)
    }
}
function scrolTo(content){
    window.scrollTo({top: offsets[content] - 70, behavior: "smooth"})
}