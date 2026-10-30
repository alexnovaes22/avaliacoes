/* Configuração do projeto Firebase "provas-estado".
   Não é secreta: identifica o projeto. Quem protege os dados são as regras do Firestore. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDEB3SDTs1xKRM4W_RDOcEH7tagV36uWOQ",
  authDomain: "provas-estado.firebaseapp.com",
  projectId: "provas-estado",
  storageBucket: "provas-estado.firebasestorage.app",
  messagingSenderId: "1047880775963",
  appId: "1:1047880775963:web:d51e4337c2f529edc07bbe"
};
/* E-mails do professor: os únicos com acesso ao painel, gabaritos e respostas.
   >>> TROQUE "SEU.GMAIL.AQUI@gmail.com" PELO SEU GMAIL PESSOAL (o mesmo endereço também no firestore.rules) <<< */
window.PROFESSOR_EMAILS = ["alex.novaes@escola.pr.gov.br", "SEU.GMAIL.AQUI@gmail.com"];
window.PROFESSOR_EMAIL = window.PROFESSOR_EMAILS[0];
