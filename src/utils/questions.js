import { updateName } from '../actions';
import { isValidName } from './validation';

const questions = [
  {
    title: 'What is your name?',
    label: 'Name',
    value: 'name',
    update: (name) => updateName(name),
    validate: (name) => isValidName(name),
  },
  {
    title: 'What is your email?',
    label: 'Email',
    value: 'email',
    update: (name) => updateName(name),
    validate: (name) => isValidName(name),
  },
];

export const getQuestion = (n) => questions[n];
