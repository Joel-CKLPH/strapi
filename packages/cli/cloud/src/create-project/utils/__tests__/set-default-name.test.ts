import { DistinctQuestion } from 'inquirer';
import { setDefaultName } from '../set-default-name';
import { ProjectAnswers } from '../../../types';

describe('setDefaultName', () => {
  it('should set the new default name in defaultValues and the question default', () => {
    const newDefaultName = 'NewProjectName';
    const questions: DistinctQuestion<ProjectAnswers>[] = [
      { type: 'input', name: 'name', default: 'OldProjectName' },
      { type: 'input', name: 'description' },
    ];
    const defaultValues: Partial<ProjectAnswers> = { name: 'InitialName' };

    setDefaultName(newDefaultName, questions, defaultValues);

    expect(defaultValues.name).toEqual(newDefaultName);

    const nameQuestion = questions.find((q) => q.name === 'name');
    expect(nameQuestion?.default).toEqual(newDefaultName);
  });

  it('should not modify questions if no name question exists', () => {
    const newDefaultName = 'NewProjectName';
    const questions: DistinctQuestion<ProjectAnswers>[] = [{ type: 'input', name: 'description' }];
    const originalQuestions = [...questions];
    const defaultValues: Partial<ProjectAnswers> = {};

    setDefaultName(newDefaultName, questions, defaultValues);

    // Check if questions array is unchanged
    expect(questions).toEqual(originalQuestions);
  });
});
