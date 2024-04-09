import React from "react"
import Image from "next/image"
import blockchainrollup from "../../../lib/icons/articleimages/blockchainrollup.jpg"
import { Articledata } from "@/lib/data/articledata"
import Footer from "@/components/footer"

export default function RollupsArticle() {
  const articledata = Articledata.filter((item) => item.id === 1).map(
    (item) => (
      <div key={item.id} className="flex flex-col ml-1 mt-5">
        <p>by {item.author}</p>
        <p>{item.date}</p>
      </div>
    )
  )
  return (
    <>
      <article>
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex justify-center items-center text-center mt-8">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                    Rollups, the main actor of blockchain scalability and data
                    access
                  </h1>
                </div>
                {articledata}
                <div className="flex justify-center items-center text-center mt-14">
                  <Image src={blockchainrollup} alt="blockchain rollup"></Image>
                </div>
                <div className="flex items-center mt-14 ml-10">
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    Since the inception of DLT (Distributed Ledger Technology),
                    layer1 solutions have been proposed as the foundational
                    layers for the future of the new open economic system
                    provided by blockchain technology. However, cracks in
                    feasibility have begun to appear in major blockchain
                    networks like Ethereum. Network congestion impedes
                    innovation by increasing transaction fees and negatively
                    impacting DApp production on Ethereum. Consequently,
                    scalability issues arise, and layer2 solutions are emerging
                    to safeguard networks like Ethereum from becoming
                    inefficient in the future.
                  </p>
                </div>
                <div className="flex items-center mt-3 ml-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl mt-10">
                    What are layer2 solutions and how will it relieve network
                    congestion?
                  </h2>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Important layer2 solutions include rollups, sidechains,
                    state channels, State Rent, and hybrid solutions that
                    incorporate one or more of these layer2 solutions. All of
                    these initiatives aim to reduce the load on layer1 chains.
                    For instance, State Rent requires users to pay rent for all
                    transactional data they store on Layer1. Consequently, only
                    important data is retained, and Layer1 will dispose of
                    unused, unimportant data, thereby mitigating the load on the
                    network.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    State channels heavily rely on the security of smart
                    contracts, as they serve as escrows to maintain the correct
                    state between the two transacting parties. Consequently,
                    malicious activity may occur when a user submits an outdated
                    state to the system, potentially rendering transactions
                    mutable instead of maintaining the immutable nature
                    guaranteed by Layer1 blockchain technologies. One prevention
                    method could be to restrict updates to existing smart
                    contracts so that the code cannot be altered. However, this
                    assumes that bugs are not persistent in the employed smart
                    contracts, making it difficult to offer the same security
                    benefits as Layer1.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Sidechains operate their separate blockchain in parallel to
                    the mainnet, making it efficient to process transactions
                    without relying on full nodes of Layer1 to store the
                    transactions made on the sidechain. Sidechains use a
                    technique called SPV (Simple Payment Verification), where
                    validator nodes of Layer1 anchor checkpoints to the mainnet
                    and let smart contracts verify the validity of the
                    checkpoints. This ensures that transactions processed on the
                    sidechain are legitimate and not tampered with.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Rollups, unlike sidechains, still rely on Layer 1 for
                    transaction validity, but they offload transaction
                    processing off-chain, creating a more efficient
                    transactional process. From a security standpoint, rollups
                    rely on the security provided by Layer 1 and do not require
                    their own consensus mechanism or block production.
                    Therefore, rollups leverage the security of the mainnet
                    while being more efficient and feasible for business use
                    cases such as cloud storage solutions, which require not
                    only reliability but also speediness and low-cost
                    structures.
                  </p>
                </div>
                <div className="flex items-center ml-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl mt-10">
                    How will rollups increase feasiblity of Layer1 solutions?
                  </h2>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    There are two versions of rollups: Optimistic rollups and ZK
                    rollups. Optimistic rollups validate transactions off-chain
                    and only validate transactions on-chain when disputes arise.
                    Additionally, optimistic rollups have a dispute resolution
                    period, giving network users time to rule out fraudulent
                    transactions. In comparison, ZK rollups offer a different
                    philosophy by validating transactions off-chain through
                    mathematical verifiable proofs and only anchoring the
                    bundled data on-chain as a final step to validate the
                    transactions. Consequently, a system is designed where trust
                    is automatically incorporated into every transaction on the
                    Rollup while still reaping all the security benefits the
                    mainnet has to offer and minimizing transaction fees in the
                    process.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Due to the minimization of transaction fees and alleviation
                    of network congestion, rollups present competition with
                    centralized cloud providers such as AWS. Customers using
                    rollups are assured a higher level of trust than any
                    centralized organization could offer, and they receive fair
                    pricing for their digital infrastructure costs. The data
                    availability layer provides clients peace of mind, ensuring
                    data availability 24/7 without being subject to maintenance
                    issues of centralized storage providers. Additionally,
                    rollups can be blockchain-agnostic, allowing implementation
                    across various blockchain ecosystems. This enhances the
                    usability of rollups and establishes data access layers for
                    every blockchain ecosystem, as clients may need to access
                    data stored on different mainchains.
                  </p>
                </div>
                <div className="flex items-center ml-10 mt-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl">
                    Rollups as the future of Layer2 solutions
                  </h2>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Rollups can be utilized for many different business use
                    cases, offering an enhanced version of what virtual machines
                    are to cloud computing. Through rollups, traditional data
                    storage solutions can be transformed to align with the
                    narrative for authenticity and immutable data structures,
                    providing clients with the ability to achieve true data
                    security and a highly reliable cost structure. Blockchains
                    offer much greater security potential than the digital
                    infrastructure where web2 currently operates, and users can
                    verify the execution of transactions themselves on-chain.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Though this does not rule out the feasibility of other Layer
                    2 solutions, as they also provide a gateway to leverage the
                    security provided by Layer 1 but in a different fashion.
                    Sidechains offer a more global approach to the scalability
                    problem of Layer 1, storing mainnet transactions on the
                    sidechain to minimize congestion. Additionally, sidechains
                    serve as independent blockchain environments, providing a
                    sandbox for experimental testing, fostering alternative
                    token economies, supporting specialized applications, and
                    enabling cross-chain interoperability. These capabilities
                    make sidechains versatile platforms for innovation and
                    ecosystem development within the broader blockchain
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
