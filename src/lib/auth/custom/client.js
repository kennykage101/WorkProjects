import axios from 'axios';

// import data from '../../../data/HAYAAN.postman_collection.json';
function generateToken() {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: '/assets/avatar.png',
  firstName: 'Rene',
  lastName: 'Wells',
  email: 'rene@devias.io',
};

class AuthClient {
  async userSignUp(values) {
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);
    console.log(values);
    try {
      const response = await axios.post('http://196.188.172.182:8030/api/v1/users', {
        ...values,
      });
      const data = await response.data;
    console.log(data)
    } catch (error) {
      console.error('Error', error);
    }
    return {};
  }

  async agentSignUp(values) {
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);
    console.log(values);
    try {
      const response = await axios.post('http://196.188.172.182:8030/api/v1/agents', {
        ...values,
      });
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.error('Error', error);
    }
    return {};
  }

  async signInWithPassword(params) {
    const { username, password } = params;

    if (username !== 'rene@devias.io' || password !== 'Secret1') {
      return {
        error: 'Invalid credentials',
      };
    }

    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);

    return {};
  }

  async resetPassword(_) {
    return {
      error: 'Password reset not implemented',
    };
  }

  async updatePassword(_) {
    return {
      error: 'Update reset not implemented',
    };
  }

  async getUser() {
    const token = localStorage.getItem('custom-auth-token');

    if (!token) {
      return { data: null };
    }

    return { data: user };
  }

  async signOut() {
    localStorage.removeItem('custom-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
