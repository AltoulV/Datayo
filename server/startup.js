import { Meteor } from 'meteor/meteor';
import { Match } from '../imports/api/match';
import { Player } from '../imports/api/player';

Meteor.startup(() => {
  if (Match.find().count() === 0) {
    const match = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Saaaaaaaavage lounging',
      'description': 'Leisure suuuuuit required. And only fiercest manners.'
    }];
 
    match.forEach((party) => {
      Match.insert(party)
    });
  }
  if (Player.find().count() === 0) {
    Player.insert({'name': 'GGWP', 'score': 18})
  }
});

// const player = [
// {'place':'1','nom':'WAGNER','prenom':'Benedikt','nation':'GER'},
// {'place':'2','nom':'ANSTETT','prenom':'Vincent','nation':'FRA'},
// {'place':'3T','nom':'YAKIMENKO','prenom':'Alexey','nation':'RUS'},
// {'place':'3T','nom':'IBRAGIMOV','prenom':'Kamil','nation':'RUS'},
// {'place':'5','nom':'BAZADZE','prenom':'Sandro','nation':'GEO'},
// {'place':'6','nom':'SZILAGYI','prenom':'Aron','nation':'HUN'},
// {'place':'7','nom':'BUIKEVICH','prenom':'Aliaksandr','nation':'BLR'},
// {'place':'8','nom':'ROUSSET','prenom':'Nicolas','nation':'FRA'},
// {'place':'9','nom':'BAZADZE','prenom':'Beka','nation':'GEO'},
// {'place':'10','nom':'SZATMARI','prenom':'Andras','nation':'HUN'},
// {'place':'11','nom':'YAGODKA','prenom':'Andriy','nation':'UKR'},
// {'place':'12','nom':'OCCHIUZZI','prenom':'Diego','nation':'ITA'},
// {'place':'13','nom':'APITHY','prenom':'Bolade','nation':'FRA'},
// {'place':'14','nom':'MARDALEISHVILI','prenom':'Mikheil','nation':'GEO'},
// {'place':'15','nom':'CURATOLI','prenom':'Luca','nation':'ITA'},
// {'place':'16','nom':'OCINSKI','prenom':'Jakub','nation':'POL'},
// {'place':'17','nom':'BADEA','prenom':'Alin','nation':'ROU'},
// {'place':'18','nom':'DOLNICEANU','prenom':'Tiberiu','nation':'ROU'},
// {'place':'19T','nom':'BERRE','prenom':'Enrico','nation':'ITA'},
// {'place':'19T','nom':'DANILENKO','prenom':'Dmitriy','nation':'RUS'},
// {'place':'21','nom':'PUNDYK','prenom':'Dmytro','nation':'UKR'},
// {'place':'22','nom':'CASARES','prenom':'Fernando','nation':'ESP'},
// {'place':'23','nom':'HARTUNG','prenom':'Max','nation':'GER'},
// {'place':'24','nom':'TEODOSIU','prenom':'Iulian','nation':'ROU'},
// {'place':'25','nom':'MORENO','prenom':'Pablo','nation':'ESP'},
// {'place':'26','nom':'KOVALEV','prenom':'Nikolay','nation':'RUS'},
// {'place':'27','nom':'LAMBERT','prenom':'Maxence','nation':'FRA'},
// {'place':'28','nom':'YILDIRIM','prenom':'Enver','nation':'TUR'},
// {'place':'29','nom':'MILLER','prenom':'Curtis','nation':'GBR'},
// {'place':'30','nom':'MANCHENO','prenom':'Guillermo','nation':'ESP'},
// {'place':'31','nom':'SAMELE','prenom':'Luigi','nation':'ITA'},
// {'place':'32','nom':'NOVIKAU','prenom':'Artsiom','nation':'BLR'},
// {'place':'33','nom':'ILIASZ','prenom':'Nikolasz','nation':'HUN'},
// {'place':'34','nom':'STATSENKO','prenom':'Yevgeniy','nation':'UKR'},
// {'place':'35','nom':'GALATANU','prenom':'Ciprian','nation':'ROU'},
// {'place':'36','nom':'WOOG','prenom':'Alexandre','nation':'ISR'},
// {'place':'37','nom':'KONIUSZ','prenom':'Marcin','nation':'POL'},
// {'place':'38','nom':'SHACHANIN','prenom':'Siarhei','nation':'BLR'},
// {'place':'39','nom':'SZABO','prenom':'Matyas','nation':'GER'},
// {'place':'40','nom':'VANHOLSBEKE','prenom':'Seppe','nation':'BEL'},
// {'place':'41','nom':'HONEYBONE','prenom':'James','nation':'GBR'},
// {'place':'42','nom':'VORONOV','prenom':'Kostiantyn','nation':'ISR'},
// {'place':'43','nom':'HUEBERS','prenom':'Richard','nation':'GER'},
// {'place':'44','nom':'ZAPOROJCENCO','prenom':'Nicolai','nation':'MDA'},
// {'place':'45','nom':'DEARY','prenom':'William','nation':'GBR'},
// {'place':'46','nom':'DEVISSCHER','prenom':'Jules-Emile','nation':'BEL'},
// {'place':'47','nom':'DECSI','prenom':'Tamas','nation':'HUN'},
// {'place':'48','nom':'ESCUDERO','prenom':'Sergio','nation':'ESP'},
// {'place':'49','nom':'STATSENKO','prenom':'Oleksiy','nation':'UKR'},
// {'place':'50','nom':'TOPGUL','prenom':'Murat','nation':'TUR'}];