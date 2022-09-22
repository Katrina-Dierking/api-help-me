import MemberDetails from "../models/memberDetails.js"

export const getMembers = async (req, res) => {
    try {
        const memberDetails = await MemberDetails.find();
        console.log(memberDetails);

        res.status(200).json(memberDetails)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
    
}

export const createMember = async (req, res) => {
    const member = req.body;

    const newMember = new MemberDetails(member);

    try{
        await newMember.save();

        res.status(201).json(newMember)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}