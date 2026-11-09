type Person = {
  name: string;
};

export function getPerson(): Promise<Person> {
  return new Promise<Person>((resolve) => setTimeout(() => resolve({ name: 'Puneeth' }), 2000));
}
