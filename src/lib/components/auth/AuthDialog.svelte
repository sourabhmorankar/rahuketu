<script lang="ts">
import { useAuth } from '../../state/auth.svelte';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const authState = useAuth();
let email = '';
let password = '';
let mode: 'login' | 'register' = 'login';
let error = '';

async function handleAuth() {
  error = '';
  try {
    if (mode === 'login') {
      const res = await signInWithEmailAndPassword(auth, email, password);
      authState.setUser({
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        isAdmin: false
      });
    } else {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      authState.setUser({
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        isAdmin: false
      });
    }
    authState.setLoading(false);
  } catch (e: any) {
    error = e.message;
    authState.setError(error);
    authState.setLoading(false);
  }
}

function handleSignOut() {
  signOut(auth);
  authState.signOut();
}
</script>

{#if !authState.isAuthenticated}
  <form class="auth-dialog" on:submit|preventDefault={handleAuth}>
    <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
    <input type="email" placeholder="Email" bind:value={email} required />
    <input type="password" placeholder="Password" bind:value={password} required />
    <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
    <button type="button" on:click={() => mode = mode === 'login' ? 'register' : 'login'}>
      {mode === 'login' ? 'Create account' : 'Back to login'}
    </button>
    {#if error}
      <div class="error">{error}</div>
    {/if}
  </form>
{:else}
  <div class="auth-dialog">
    <div>Signed in as {authState.user?.email}</div>
    <button on:click={handleSignOut}>Sign Out</button>
  </div>
{/if}

<style>
.auth-dialog {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  padding: 2rem;
  max-width: 320px;
  margin: 2rem auto;
}
.auth-dialog input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
}
.auth-dialog button {
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background: #3b82f6;
  color: white;
  cursor: pointer;
}
.auth-dialog .error {
  color: #dc2626;
  font-size: 0.9rem;
}
</style>
