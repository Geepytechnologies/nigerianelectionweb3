// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NigerianElection {
    IERC20 private myToken;
    using Counters for Counters.Counter;

    Counters.Counter public _votersId;
    Counters.Counter public _candidateId;
    address public inecChairman;

    struct Candidate {
        uint256 candidateId;
        string age;
        string name;
        string image;
        uint256 voteCount;
        address _address;
        string politicalParty;
        string partylogo;
    }

    event createCandidate(
        uint256 indexed candidateId,
        string age,
        string name,
        string image,
        uint256 voteCount,
        address _address,
        string politicalParty,
        string partylogo
    );

    address[] public candidateAddress;

    mapping(address => Candidate) public candidates;

    struct Voter {
        uint256 voterId;
        string voterName;
        string voterAge;
        string pvcNumber;
        address voterAddress;
        bool voted;
        uint256 vote;
    }

    event VoterCreate(
        uint256 voterId,
        string voterName,
        string voterAge,
        string pvcNumber,
        address voterAddress,
        bool voted
    );

    address[] public votedVoters;
    address[] public votersAddress;
    mapping(address => Voter) public voters;

    constructor() {
        inecChairman = msg.sender;
        myToken = IERC20(0x128d66bCbeeBa75071E586f4722F8c64Db9115B7);
    }

    function invest() public payable {}

    function assignCandidate(
        address _address,
        string memory _age,
        string memory _name,
        string memory _image,
        string memory _politicalParty,
        string memory _partylogo
    ) public {
        require(
            inecChairman == msg.sender,
            "only the Inec Chairman can assign a candidate"
        );
        _candidateId.increment();

        uint256 id = _candidateId.current();
        Candidate storage candidate = candidates[_address];

        candidate.candidateId = id;
        candidate.age = _age;
        candidate.name = _name;
        candidate.image = _image;
        candidate.politicalParty = _politicalParty;
        candidate.voteCount = 0;
        candidate._address = _address;
        candidate.partylogo = _partylogo;

        candidateAddress.push(_address);

        emit createCandidate(
            id,
            _age,
            _name,
            _image,
            candidate.voteCount,
            _address,
            _politicalParty,
            _partylogo
        );
    }

    function getCandidates() public view returns (address[] memory) {
        return candidateAddress;
    }

    function getNumberOfCandidates() public view returns (uint256) {
        return candidateAddress.length;
    }

    function getcandidateInfo(
        address _address
    )
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            uint256,
            string memory,
            address,
            string memory
        )
    {
        return (
            candidates[_address].candidateId,
            candidates[_address].age,
            candidates[_address].name,
            candidates[_address].image,
            candidates[_address].voteCount,
            candidates[_address].politicalParty,
            candidates[_address]._address,
            candidates[_address].partylogo
        );
    }

    //create voter
    function RegisterVoter(
        address _address,
        string memory _age,
        string memory _name,
        string memory _pvcNumber
    ) public {
        require(
            inecChairman == msg.sender,
            "only the Inec Chairman can register a voter"
        );
        _votersId.increment();

        uint256 id = _votersId.current();
        Voter storage voter = voters[_address];

        voter.voterId = id;
        voter.voterAge = _age;
        voter.voterName = _name;
        voter.pvcNumber = _pvcNumber;
        voter.voterAddress = _address;
        voter.voted = false;

        votersAddress.push(_address);

        emit VoterCreate(id, _name, _age, _pvcNumber, _address, voter.voted);
    }

    function IfRegisteredVoter(address _address) internal view returns (bool) {
        for (uint i = 0; i < votersAddress.length; i++) {
            if (votersAddress[i] == _address) {
                return true;
            }
        }
        return false;
    }

    function transferTokens(
        address from,
        address recipient,
        uint256 amount
    ) public {
        myToken.transferFrom(from, recipient, amount);
    }

    function vote(
        address _candidateAddress,
        uint256 _candidateVoteId
    ) external {
        Voter storage voter = voters[msg.sender];
        require(IfRegisteredVoter(msg.sender), "You haven't registered yet");
        require(!voter.voted, "you have already voted");

        voter.voted = true;
        voter.vote = _candidateVoteId;

        votedVoters.push(msg.sender);
        candidates[_candidateAddress].voteCount += 1;
    }

    function getNumberOfVoters() public view returns (uint256) {
        return votedVoters.length;
    }

    function getNumberOfRegisteredVoters() public view returns (uint256) {
        return votersAddress.length;
    }

    function getVotersList() public view returns (address[] memory) {
        return votedVoters;
    }

    function getRegisteredVotersList() public view returns (address[] memory) {
        return votersAddress;
    }

    function getVoterInfo(
        address _address
    )
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            address,
            bool,
            uint256
        )
    {
        return (
            voters[_address].voterId,
            voters[_address].voterName,
            voters[_address].voterAge,
            voters[_address].pvcNumber,
            voters[_address].voterAddress,
            voters[_address].voted,
            voters[_address].vote
        );
    }

    function findCandidateWithMostVotes() public view returns (address) {
        require(candidateAddress.length > 0, "No candidates registered");

        address candidateWithMostVotes = candidateAddress[0];

        for (uint i = 1; i < candidateAddress.length; i++) {
            address currentCandidateAddress = candidateAddress[i];
            if (
                candidates[currentCandidateAddress].voteCount >
                candidates[candidateWithMostVotes].voteCount
            ) {
                candidateWithMostVotes = currentCandidateAddress;
            }
        }

        return candidateWithMostVotes;
    }
}
