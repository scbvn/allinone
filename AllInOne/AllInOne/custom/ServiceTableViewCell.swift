//
//  ServiceTableViewCell.swift
//  AllInOne
//
//  Created by SmartCity on 10/4/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class ServiceTableViewCell: UITableViewCell, UICollectionViewDelegate, UICollectionViewDataSource {
    
    var delegate: ServiceViewCellDelegator!
    
    var services: GroupService?
    
    @IBOutlet weak var serviceItems: UICollectionView!
    
    @IBOutlet weak var lblNumOfDetail: UILabel!
    @IBOutlet weak var lblGroupTitle: UILabel!
    @IBOutlet weak var imgGroupIco: UIImageView!
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return services?.services.count ?? 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "detail_cell", for: indexPath) as! ServiceCollectionViewCell;
        
        let serviceItem = services?.services[indexPath.row]
        
        cell.configure(with: serviceItem!)
        
        return cell;
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        self.delegate.callSegueFromCell(data: (services?.services[indexPath.row])!)
    }

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
        serviceItems.delegate = self
        serviceItems.dataSource = self
        imgGroupIco.image = imgGroupIco.image?.imageWithInsets(insetDimen: 10.0)
        imgGroupIco.layer.cornerRadius = imgGroupIco.frame.height / 2
        imgGroupIco.layer.masksToBounds = true
        imgGroupIco.layer.borderWidth = 2.0
        imgGroupIco.layer.borderColor = UIColor.gray.cgColor
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
