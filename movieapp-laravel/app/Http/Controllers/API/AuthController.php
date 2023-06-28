<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|regex:/[A-Z][a-z]*/',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['user' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);

    }

    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json(['message' => 'Please enter correct email and password!'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['success' => true, 'message' => 'Hello ' . $user->name . '! Welcome to home page!','access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return ['message' => 'Logout successful.'];
    }


}
