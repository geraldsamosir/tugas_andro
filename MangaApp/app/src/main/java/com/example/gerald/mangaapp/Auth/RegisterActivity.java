package com.example.gerald.mangaapp.Auth;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.example.gerald.mangaapp.R;

public class RegisterActivity extends AppCompatActivity {

    private EditText email;
    private  EditText password;
    private  EditText re_password;
    private TextView _singin_link;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);


        _singin_link =  (TextView) findViewById(R.id.link_login);
        _singin_link.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(),  LoginActivity.class);
                startActivity(intent);
            }
        });
    }


}
