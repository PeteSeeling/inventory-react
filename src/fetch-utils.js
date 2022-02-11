import { client, checkError } from './services/client';

export function getUser() {
  return client.auth.session();

}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = './';
}

export async function createPizza(pizza){
  const response = await client
    .from('pizzas')
    .insert([pizza]);

  return checkError(response);
}

export async function getPizzas() {
  const response = await client
    .from('pizzas')
    .select();

  return checkError(response);    
}

export async function getPizzaById(id) {
  const response = await client
    .from('pizzas')
    .select()
    .match({ id })
    .single();

  return checkError(response);    
}