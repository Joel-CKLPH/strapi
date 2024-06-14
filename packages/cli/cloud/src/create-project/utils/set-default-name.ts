import { DistinctQuestion } from 'inquirer';
import { ProjectAnswers } from '../../types';

export function setDefaultName(
  newDefaultName: string,
  questions: ReadonlyArray<DistinctQuestion<ProjectAnswers>>,
  defaultValues: Partial<ProjectAnswers>
) {
  defaultValues.name = newDefaultName;
  const nameQuestion = questions.find((q) => q.name === 'name');
  if (nameQuestion) {
    nameQuestion.default = newDefaultName;
  }
}
