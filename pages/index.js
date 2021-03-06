import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
//import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Aqui vai outra caixa</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio enim, tincidunt eu massa hendrerit, rhoncus pellentesque metus. Morbi posuere condimentum nisi quis tristique. Vivamus eu lacus quis risus lobortis maximus et non neque.</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/adrianomeirasilva" />
    </QuizBackground>
  );
}