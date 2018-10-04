//
//  ServiceTableViewCell.swift
//  AllInOne
//
//  Created by SmartCity on 10/4/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class ServiceTableViewCell: UITableViewCell, UICollectionViewDelegate, UICollectionViewDataSource {
    
    @IBOutlet weak var serviceItems: UICollectionView!
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 15
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "detail_cell", for: indexPath);
        
        return cell;
    }
    

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
        serviceItems.delegate = self
        serviceItems.dataSource = self
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
