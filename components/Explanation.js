import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from "../components/Styles";

class _Explanation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={Styles.main}>
      <ScrollView style={Styles.explanations}>
        <View style={Styles.explanation}>
          <Text style={Styles.explanationText}>
            Ce jeu est à faire avec votre enfant.
            Il est conçu pour vous aider à faire répéter la lecture
            de syllabes à votre enfant.
          </Text>
        </View>
        <View style={{height: 25}}></View>
        <View style={Styles.explanation}>
          <Text style={Styles.explanationText}>
            Commencez par sélectionner les lettres déjà apprises
            avec son enseignant(e) dans l'onglet "Lettres".
          </Text>
        </View>
        <View style={{height: 25}}></View>
        <View style={Styles.explanation}>
          <Text style={Styles.explanationText}>
            Puis passez à l'onglet "Jeu",
            et demandez à votre enfant de lire la syllabe affichée.
            S'il répond correctement appuyez sur "👍",
            s'il fait une erreur appuyez sur "👎",
            et si vous souhaitez passer directement à une autre syllabe,
            appuyez sur "🤷".
            N'oubliez pas de donner la réponse à votre enfant !
          </Text>
        </View>
        <View style={{height: 25}}></View>
        <View style={Styles.explanation}>
          <Text style={Styles.explanationText}>
            Le jeu ne doit pas durer très longtemps.
            Faites plusieurs petites séances de quelques minutes
            plutôt qu'une longue séance.
            Le score est donné dans l'onglet "Score":
            le nombre de bonnes réponses est donné par "👍",
            alors que le nombre d'erreurs est indiqué par "👎".
          </Text>
        </View>
        <View style={{height: 25}}></View>
        <View style={Styles.explanation}>
          <Text style={Styles.explanationText}>
            Que votre enfant ait beaucoup de bonnes ou de mauvaises réponses,
            encouragez-le en mettant en avant sa progression !
            L'important est que votre enfant ait envie de faire d'autres
            séances afin de répéter très souvent les syllabes
            et qu'il s'entraîne.
          </Text>
        </View>
      </ScrollView>
    </View>;
  }

};

function mapStateToProps(state) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
};

const Explanation = connect(mapStateToProps, mapDispatchToProps)(_Explanation);

export default Explanation;
