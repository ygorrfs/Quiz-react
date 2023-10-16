import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: "Qual dos seguintes conceitos em ReactJS é usado para reutilizar componentes em várias partes de uma aplicação?",
        options: ["JSX", "Componente de Estado", "Props", "Virtual DOM"],
        answer: 2
    },
    {
        question: "Qual é a principal diferença entre os componentes de classe e os componentes funcionais em ReactJS?",
        options: ["Os componentes de classe são mais rápidos.", "Os componentes funcionais não podem ter estado.", "Os componentes de classe usam arrow functions.", "Os componentes funcionais são baseados em funções."],
        answer: 3
    },
    {
        question: "Em React, qual é a finalidade da função `render` em um componente de classe?",
        options: ["Iniciar o componente.", "Atualizar o estado do componente.", "Renderizar o conteúdo na interface do usuário.", "Gerenciar eventos de clique."],
        answer: 2
    },
    {
        question: "O que é o JSX em ReactJS?",
        options: ["Uma biblioteca JavaScript.", "Um mecanismo de consulta de dados.", "Uma sintaxe que permite escrever elementos React de forma semelhante ao HTML.", "Uma forma de fazer consultas ao banco de dados."],
        answer: 2
    },
    {
        question: "Qual método de ciclo de vida do componente é chamado após o componente ser renderizado pela primeira vez?",
        options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "componentWillMount"],
        answer: 0
    },
    {
        question: "O que é o conceito de 'props drilling' em React?",
        options: ["Um método de otimização de desempenho.", "Passar props de um componente pai para um componente filho e, potencialmente, para componentes filhos aninhados.", "Uma técnica para reduzir a complexidade de componentes.", "Um padrão de design de componente."],
        answer: 1
    },
    {
        question: "Em React, qual hook é usado para realizar efeitos secundários, como solicitações de API ou manipulação de DOM, em componentes funcionais?",
        options: ["useEffect", "useState", "useContext", "useRef"],
        answer: 0
    },
    {
        question: "O que é o Virtual DOM em React?",
        options: ["Uma representação virtual de componentes no código-fonte.", "Uma tecnologia de realidade virtual.", "Uma técnica de renderização de elementos HTML diretamente no DOM.", "Um banco de dados virtual para armazenar informações de estado."],
        answer: 0
    },
    {
        question: "Qual é a função do método `setState` em um componente React?",
        options: ["Definir o estado inicial do componente.", "Atualizar o estado do componente e agendar uma re-renderização.", "Renderizar o componente na árvore DOM virtual.", "Iniciar um novo ciclo de vida do componente."],
        answer: 1
    },
    {
        question: "Qual método de ciclo de vida do componente React é chamado antes de o componente ser desmontado e removido do DOM?",
        options: ["componentWillUnmount", "componentDidMount", "componentDidUpdate", "componentWillUpdate"],
        answer: 0
    }
];