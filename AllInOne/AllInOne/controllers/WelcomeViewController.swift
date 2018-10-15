//
//  WelcomeViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/11/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class WelcomeViewController: UIViewController {

    @IBOutlet weak var lblError: UILabel!
    @IBOutlet weak var lblWelcome: UILabel!
    @IBOutlet weak var btnCheckInOut: UIButton!
    @IBOutlet weak var txtCode: UITextField!
    @IBOutlet weak var vContainerEnterCode: UIStackView!
    override func viewDidLoad() {
        super.viewDidLoad()
        lblError.isHidden = true;
        lblWelcome.isHidden = true
        // Do any additional setup after loading the view.
        if(UserDefaults.standard.bool(forKey: "isCheckedIn")) {
            vContainerEnterCode.isHidden = true;
            lblWelcome.isHidden = false
            btnCheckInOut.setTitle("Check out", for: UIControl.State.normal)
        } else {
            vContainerEnterCode.isHidden = false;
            lblWelcome.isHidden = true
            btnCheckInOut.setTitle("Check in", for: UIControl.State.normal)
        }
    }
    
    @IBAction func actionCheckInOut(_ sender: Any) {
        self.view.endEditing(true)
        if(btnCheckInOut.titleLabel?.text == "Check in") {
            if ((txtCode.text?.isEmpty)!) {
                self.lblError.isHidden = false
                return
            }
            lblError.isHidden = true
            vContainerEnterCode.isHidden = true;
            lblWelcome.isHidden = false
            btnCheckInOut.setTitle("Check out", for: UIControl.State.normal)
            UserDefaults.standard.set(true, forKey: "isCheckedIn")
        } else {
            lblError.isHidden = true
            vContainerEnterCode.isHidden = false;
            lblWelcome.isHidden = true
            btnCheckInOut.setTitle("Check in", for: UIControl.State.normal)
            UserDefaults.standard.set(false, forKey: "isCheckedIn")
        }
        
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
