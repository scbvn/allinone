//
//  HelpViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/11/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit
import MessageUI
import Toast_Swift

class HelpViewController: UIViewController, MFMailComposeViewControllerDelegate {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    @IBAction func actionEmail(_ sender: Any) {
        if MFMailComposeViewController.canSendMail() {
            let mail = MFMailComposeViewController()
            mail.mailComposeDelegate = self
            mail.setToRecipients(["you@yoursite.com"])
            mail.setMessageBody("<p>You're so awesome!</p>", isHTML: true)
            
            present(mail, animated: true)
        } else {
            // show failure alert
            self.view.makeToast("Your device cannot send email")
        }
    }
    @IBAction func actionCall(_ sender: Any) {
        UIApplication.shared.openURL(NSURL(string: "tel://1900686868")! as URL)
    }
    
    func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
