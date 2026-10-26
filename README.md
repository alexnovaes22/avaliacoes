# Avaliações

Sistema de provas online com Firebase (projeto `provas-estado`).

- **Alunos:** `https://alexnovaes22.github.io/avaliacoes/index.html?p=ID_DA_PROVA` (o link de cada prova é copiado no painel)
- **Professor:** `https://alexnovaes22.github.io/avaliacoes/painel.html`

## Arquivos
| Arquivo | Função |
|---|---|
| `index.html` | Página do aluno: login com a conta Google da escola, prova e envio único |
| `painel.html` | Painel do professor: cadastros, editor de provas, correção, PDF e Excel |
| `config.js` | Configuração do Firebase e e-mail do professor |
| `firestore.rules` | Regras de segurança (cole no Firebase: Firestore Database → Regras → Publicar) |

## Segurança
- Só o e-mail definido em `config.js` e em `firestore.rules` acessa o painel, os gabaritos e as respostas.
- O gabarito nunca é enviado ao navegador do aluno.
- O aluno só consegue abrir a prova se estiver aberta e se o e-mail dele estiver na lista da turma.
- O aluno envia uma única vez e não consegue ler nada depois do envio; vê apenas "Prova enviada, aguardando correção".

## Trocar de professor ou de e-mail
Altere o e-mail em **dois lugares**: `config.js` e `firestore.rules` (depois publique as regras de novo no Firebase).
