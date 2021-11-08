<template>
    <div class="login-form">
        <form name="login" @submit.prevent="handleLogin">
            <h2 class="text-center">Log in</h2>       
            <div class="form-group">
                <input
                    type="text"
                    v-model="user.username"
                    v-validate="'required'"
                    name="username"
                    class="form-control"
                    placeholder="Username"
                />
            </div>
            <br>
            <div class="form-group">
                <input
                    type="password"
                    v-model="user.password"
                    v-validate="'required'"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                />
            </div>
            <div v-if="errors.has('password')" class="alert alert-danger" role="alert">Password is required!</div>
            <br>
            <div class="form-group">
                <button type="submit" class="btn btn-dark btn-block">Login</button>
            </div>
            <br>
            <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
            </div>
        </form>
    </div>
</template>

<script>
import User from '../models/user'
import { mapGetters } from 'vuex'

export default {
    name: 'Signin',
    components: { },
    data() {
        return {
            user: new User('', ''),
            loading: false,
            message: ''
    }
  },
    computed: {
        ...mapGetters ({
            // authenticated: 'auth/authenticated'
        })
    },
    created() {
        if (this.authenticated) {
            this.$router.push('/data');
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
                if (!isValid) {
                    this.loading = false;
                    return;
                }

                if (this.user.username && this.user.password) {
                this.$store.dispatch('auth/login', this.user).then(
                    () => {
                    this.$router.push('/home');
                    },
                    error => {
                    this.loading = false;
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    }
                );
                }
            });
        }
  }
}
</script>

<style scoped>
    .login-form {
        width: 340px;
        margin: 50px auto;
        font-size: 15px;
    }
    .login-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 4px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>