import styled         from 'styled-components'
import db             from '../db.json';
import QuizContainer  from '../src/components/QuizContainer'
import Widget         from '../src/components/Widget'
import QuizLogo       from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer         from '../src/components/Footer'
import GitHubCorner   from '../src/components/GitHubCorner'


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>          
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Outro título</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio enim, 
              tincidunt eu massa hendrerit, rhoncus pellentesque metus. Morbi posuere condimentum 
              nisi quis tristique. Vivamus eu lacus quis risus lobortis maximus et non neque.
            </p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/adrianomeirasilva"/>
    </QuizBackground>
  )
}
