package com.inn.cafe.utils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailUtils {

    @Autowired
    private JavaMailSender emailSender;

    public void sendSimpleMessage(String to, String subject, String text, List<String> list){
        try{
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom("yuktasingh2004@gmail.com");
            helper.setTo(to);
            helper.setSubject(subject);
            message.setContent(text, "text/html");
            if(list!=null && list.size()>0)
                helper.setCc(getCcArray(list));
            emailSender.send(message);
        }catch(Exception ex){
            ex.printStackTrace();
        }
    }

    public void sendSignUpEmail(String to, String password) {
        String subject = "Your Login Details for Cafe Management System";
        String htmlMsg = "<p><b>Your Login details for Cafe Management System</b><br><b>Email: </b> " + to + " <br><b>Password: </b> " + password + "<br><a href=\"http://localhost:4200/\">Click here to login</a></p>";

        sendSimpleMessage(to, subject, htmlMsg, null);
    }

    public void sendPasswordChangeEmail(String to, String newPassword) {
        String subject = "Your Updated Password for Cafe Management System";
        String htmlMsg = "<p><b>Your updated login details for Cafe Management System</b><br><b>Email: </b> " + to + " <br><b>New Password: </b> " + newPassword + "<br><a href=\"http://localhost:4200/\">Click here to login</a></p>";

        sendSimpleMessage(to, subject, htmlMsg, null);
    }

    public void forgotMail(String to, String subject, String password) {
        String htmlMsg = "<p><b>Your Login details for Cafe Management System</b><br><b>Email: </b> " + to + " <br><b>Password: </b> " + password + "<br><a href=\"http://localhost:4200/\">Click here to login</a></p>";
        sendSimpleMessage(to, subject, htmlMsg, null);
    }

    private String[] getCcArray(List<String> ccList){
        String[] cc = new String[ccList.size()];
        for(int i=0; i<ccList.size();i++){
            cc[i]=ccList.get(i);
        }
        return cc;
    }
}
